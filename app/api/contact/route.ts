import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/contact/validations/contact";
import { sendContactUsEmail } from "@/lib/contact/pigeon-post";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      const firstError =
        parsed.error.issues[0]?.message || "Invalid form data.";
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const { fullName, email, serviceType, message } = parsed.data;

    // pigeon-post sends both halves: the acknowledgement to the customer and
    // the enquiry details to the business inbox.
    try {
      await sendContactUsEmail({ fullName, email, serviceType, message });
    } catch (err) {
      console.error("[contact] pigeon-post request failed:", err);
      return NextResponse.json(
        {
          error:
            "We couldn't send your inquiry right now. Please try again shortly.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
