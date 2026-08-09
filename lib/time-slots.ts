import { addMinutes, format, isBefore } from "date-fns";

export interface TimeSlot {
  /** 24hr value used as the form value, e.g. "09:00" */
  value: string;
  /** Human readable label, e.g. "9:00 AM" */
  label: string;
  period: "Morning" | "Afternoon" | "Evening";
}

export interface DaySlots {
  Morning: TimeSlot[];
  Afternoon: TimeSlot[];
  Evening: TimeSlot[];
}

/**
 * Generates bookable time slots for a single day.
 * Default window: 9:00 AM -> 6:00 PM, 15 minute increments.
 * The slot starting at 5:45 PM is the last one generated so every
 * appointment (15 min) finishes at or before 6:00 PM.
 */
export function generateTimeSlots(
  startHour = 9,
  endHour = 18,
  intervalMinutes = 15
): TimeSlot[] {
  const slots: TimeSlot[] = [];

  let cursor = new Date();
  cursor.setHours(startHour, 0, 0, 0);

  const end = new Date();
  end.setHours(endHour, 0, 0, 0);

  while (isBefore(cursor, end)) {
    const hour = cursor.getHours();
    const period: TimeSlot["period"] =
      hour < 12 ? "Morning" : hour < 17 ? "Afternoon" : "Evening";

    slots.push({
      value: format(cursor, "HH:mm"),
      label: format(cursor, "h:mm a"),
      period,
    });

    cursor = addMinutes(cursor, intervalMinutes);
  }

  return slots;
}

/** Groups a flat slot list into Morning / Afternoon / Evening buckets for display. */
export function groupSlotsByPeriod(slots: TimeSlot[]): DaySlots {
  return {
    Morning: slots.filter((s) => s.period === "Morning"),
    Afternoon: slots.filter((s) => s.period === "Afternoon"),
    Evening: slots.filter((s) => s.period === "Evening"),
  };
}

/**
 * Optional helper: pass in an array of already-booked "HH:mm" values
 * (e.g. fetched from your DB/calendar for the selected date) to
 * mark them unavailable. Wire this up to real data before going live —
 * right now every slot in the 9-6 window is shown as available.
 */
export function withBookedSlotsRemoved(slots: TimeSlot[], booked: string[]): TimeSlot[] {
  return slots.filter((s) => !booked.includes(s.value));
}
