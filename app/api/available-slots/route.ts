import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";

// GET /api/available-slots?date=2026-08-02
// Returns the list of already-booked "HH:mm" times for that date.
export async function GET(req: NextRequest) {
  const date = req.nextUrl.searchParams.get("date");

  if (!date) {
    return NextResponse.json({ error: "Missing date query param." }, { status: 400 });
  }

  try {
    const { data, error } = await getSupabaseAdmin()
      .from("bookings")
      .select("booking_time")
      .eq("booking_date", date);

    if (error) {
      console.error("[available-slots] Supabase error:", error);
      return NextResponse.json({ error: "Could not load availability." }, { status: 500 });
    }

    const bookedTimes = data.map((row) => row.booking_time as string);

    return NextResponse.json({ bookedTimes });
  } catch (err) {
    console.error("[available-slots] Unexpected error:", err);
    return NextResponse.json({ error: "Could not load availability." }, { status: 500 });
  }
}