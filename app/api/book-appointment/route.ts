import { NextRequest, NextResponse } from "next/server";
import { format } from "date-fns";
import { sendBookingEmail } from "@/lib/pigeon-post";
import { getSupabaseAdmin } from "@/lib/supabase";
import {
  personalDetailsSchema,
  MAX_FILE_SIZE_BYTES,
  MAX_FILE_SIZE_MB,
  MAX_COMBINED_SIZE_BYTES,
  MAX_COMBINED_SIZE_MB,
  ACCEPTED_FILE_TYPES,
} from "@/lib/validations/appointment";

export const runtime = "nodejs";

function validateFile(file: File | null, label: string): string | null {
  if (!file || file.size === 0) return `${label} is required`;
  if (file.size > MAX_FILE_SIZE_BYTES) return `${label} must be smaller than ${MAX_FILE_SIZE_MB}MB`;
  if (!ACCEPTED_FILE_TYPES.includes(file.type)) return `${label} must be a PDF, JPG or PNG file`;
  return null;
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const dateStr = formData.get("date") as string | null; // "yyyy-MM-dd", e.g. "2026-08-02"
    const time = formData.get("time") as string | null; // "HH:mm"
    const fullName = formData.get("fullName") as string | null;
    const email = formData.get("email") as string | null;
    const secondSignerEmail = (formData.get("secondSignerEmail") as string | null) || "";
    const phone = formData.get("phone") as string | null;
    const message = (formData.get("message") as string | null) || "";
    const affidavit = formData.get("affidavit") as File | null;
    const governmentId = formData.get("governmentId") as File | null;

    if (!dateStr || !time) {
      return NextResponse.json({ error: "Please select a date and time slot." }, { status: 400 });
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
      return NextResponse.json({ error: "Invalid date." }, { status: 400 });
    }
    // Build the Date purely from the y/m/d numbers — never through toISOString()/UTC —
    // so the calendar day can't shift depending on the server's timezone.
    const [year, month, day] = dateStr.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    if (isNaN(date.getTime())) {
      return NextResponse.json({ error: "Invalid date." }, { status: 400 });
    }

    const parsed = personalDetailsSchema.safeParse({
      fullName,
      email,
      secondSignerEmail,
      phone,
      message,
    });
    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message || "Invalid form data.";
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const affidavitError = validateFile(affidavit, "Affidavit to notarisation");
    if (affidavitError) return NextResponse.json({ error: affidavitError }, { status: 400 });

    const govIdError = validateFile(governmentId, "Government ID (Passport)");
    if (govIdError) return NextResponse.json({ error: govIdError }, { status: 400 });

    // Defence in depth: a request this large is normally rejected upstream with
    // a 413 before it ever reaches here, but don't rely on that.
    if (affidavit!.size + governmentId!.size > MAX_COMBINED_SIZE_BYTES) {
      return NextResponse.json(
        { error: `Both documents together must be ${MAX_COMBINED_SIZE_MB}MB or less.` },
        { status: 413 }
      );
    }

    const bookingDate = dateStr; // already "yyyy-MM-dd", stored exactly as received

    // ---- Reserve the slot FIRST. This is the step that actually stops
    // double-booking: the `unique (booking_date, booking_time)` constraint
    // makes the database reject a second insert for the same slot, even
    // if two people submit at the exact same moment. ----
    const { error: insertError } = await getSupabaseAdmin().from("bookings").insert({
      booking_date: bookingDate,
      booking_time: time,
      full_name: parsed.data.fullName,
      email: parsed.data.email,
      second_signer_email: parsed.data.secondSignerEmail || null,
      phone: parsed.data.phone,
      message: parsed.data.message || null,
    });

    if (insertError) {
      // Postgres unique_violation error code
      if (insertError.code === "23505") {
        return NextResponse.json(
          { error: "Sorry, that time slot was just booked by someone else. Please pick another." },
          { status: 409 }
        );
      }
      console.error("[book-appointment] Supabase insert error:", insertError);
      return NextResponse.json(
        { error: "Something went wrong saving your booking. Please try again." },
        { status: 500 }
      );
    }

    // ---- Slot is reserved. Now send the emails. ----
    const [hourStr, minuteStr] = time.split(":");
    const startLabel = format(
      new Date(date).setHours(Number(hourStr), Number(minuteStr)),
      "h:mm a"
    );
    const endLabel = format(
      new Date(date).setHours(Number(hourStr), Number(minuteStr) + 15),
      "h:mm a"
    );
    const dateLabel = format(date, "EEEE, MMM d, yyyy");
    const timeLabel = `${startLabel} – ${endLabel} (15 Minutes)`;

    // pigeon-post sends both halves: a generic automated acknowledgement to the
    // customer, and the appointment details plus both uploads to the business.
    try {
      await sendBookingEmail({
        fullName: parsed.data.fullName,
        email: parsed.data.email,
        secondSignerEmail: parsed.data.secondSignerEmail,
        phone: parsed.data.phone,
        message: parsed.data.message,
        dateLabel,
        timeLabel,
        attachments: [affidavit!, governmentId!],
      });
    } catch (err) {
      // The booking is already saved in the DB at this point — the slot is
      // correctly reserved even though the notification failed. Log it so you
      // can follow up manually; don't undo the booking or fail the request.
      console.error("[book-appointment] pigeon-post request failed:", err);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[book-appointment] Unexpected error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}