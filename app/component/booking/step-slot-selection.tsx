"use client";

import { useEffect, useMemo, useState } from "react";
import { format, isSameDay, isBefore } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { generateTimeSlots, groupSlotsByPeriod } from "@/lib/time-slots";
import Button from "../ui/atoms/Button";

interface StepSlotSelectionProps {
  initialDate?: Date;
  initialTime?: string;
  onNext: (date: Date, time: string) => void;
}

export function StepSlotSelection({ initialDate, initialTime, onNext }: StepSlotSelectionProps) {
  const todayDate = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const [date, setDate] = useState<Date | undefined>(initialDate ?? todayDate);
  const [time, setTime] = useState<string | undefined>(initialTime);
  const [error, setError] = useState<string | null>(null);

  const [bookedTimes, setBookedTimes] = useState<string[]>([]);
  const [loadingAvailability, setLoadingAvailability] = useState(false);
  const [availabilityFailed, setAvailabilityFailed] = useState(false);
  /** Bumped by the "Try again" button to re-run the availability fetch. */
  const [reloadKey, setReloadKey] = useState(0);

  const allSlots = useMemo(() => generateTimeSlots(9, 18, 15), []);
  const grouped = useMemo(() => groupSlotsByPeriod(allSlots), [allSlots]);

  const isToday = date ? isSameDay(date, new Date()) : false;
  const now = new Date();

  // Fetch already-booked slots whenever the selected date changes.
  useEffect(() => {
    if (!date) {
      setBookedTimes([]);
      return;
    }

    let cancelled = false;
    setLoadingAvailability(true);
    setAvailabilityFailed(false);
    setBookedTimes([]);

    const dateParam = format(date, "yyyy-MM-dd");

    fetch(`/api/available-slots?date=${dateParam}`)
      .then(async (res) => {
        // A failed route can reply with an HTML error page, so check the
        // status before trying to parse — otherwise res.json() throws and
        // the real reason (a 500) is lost.
        if (!res.ok) throw new Error(`Availability request failed: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        setBookedTimes(data.bookedTimes ?? []);
        setError(null);
      })
      .catch(() => {
        if (cancelled) return;
        // Fail closed: without a known booked list we can't tell which slots
        // are free, so don't let the user pick one that may already be taken.
        setAvailabilityFailed(true);
        setError("Couldn't load availability. Please try again.");
      })
      .finally(() => {
        if (!cancelled) setLoadingAvailability(false);
      });

    return () => {
      cancelled = true;
    };
  }, [date, reloadKey]);

  const isSlotBookedOrPast = (slotValue: string) => {
    if (bookedTimes.includes(slotValue)) return true;
    if (!isToday) return false;
    const [h, m] = slotValue.split(":").map(Number);
    const slotDate = new Date();
    slotDate.setHours(h, m, 0, 0);
    return isBefore(slotDate, now);
  };

  // Hide booked/past slots entirely rather than showing them disabled.
  const visibleGrouped = useMemo(() => {
    return {
      Morning: grouped.Morning.filter((s) => !isSlotBookedOrPast(s.value)),
      Afternoon: grouped.Afternoon.filter((s) => !isSlotBookedOrPast(s.value)),
      Evening: grouped.Evening.filter((s) => !isSlotBookedOrPast(s.value)),
      // eslint-disable-next-line react-hooks/exhaustive-deps
    };
  }, [grouped, bookedTimes, isToday]);

  const hasAnySlots =
    visibleGrouped.Morning.length + visibleGrouped.Afternoon.length + visibleGrouped.Evening.length >
    0;

  const handleNext = () => {
    if (availabilityFailed) {
      setError("Couldn't load availability. Please try again.");
      return;
    }
    if (!date) {
      setError("Please select a date.");
      return;
    }
    if (!time) {
      setError("Please select a time slot.");
      return;
    }
    if (bookedTimes.includes(time)) {
      setError("That slot was just booked by someone else. Please pick another.");
      setTime(undefined);
      return;
    }
    setError(null);
    onNext(date, time);
  };

  return (
    <div>
      <div className="grid sm:grid-cols-2 gap-6 border border-neutral-light-grey p-6">
        {/* Date picker */}
        <div>
          <Calendar
            mode="single"
            selected={date}
            onSelect={(d) => {
              setDate(d ?? undefined);
              setTime(undefined);
            }}
            disabled={{ before: todayDate }}
            startMonth={todayDate}
            className="rounded border-0 p-0 w-full bg-transparent"
          />
        </div>

        {/* Time slots */}
        <div>
          <p className="body18 !font-medium">Available Times</p>
          <p className="text-xs text-gray-500 mb-4 font-mono">
            {date ? format(date, "EEEE, MMM d") : "Select a date first"}
          </p>

          {date ? (
            loadingAvailability ? (
              <p className="body12 text-neutral-light-grey italic">Checking availability…</p>
            ) : availabilityFailed ? (
              <div className="space-y-2">
                <p className="text-sm text-red-500">
                  Couldn&apos;t load availability for this day.
                </p>
                <button
                  type="button"
                  onClick={() => setReloadKey((k) => k + 1)}
                  className="body14 underline cursor-pointer text-neutral-deep-black"
                >
                  Try again
                </button>
              </div>
            ) : hasAnySlots ? (
              <div className="space-y-4 max-h-72 overflow-y-auto pr-1">
                {(["Morning", "Afternoon", "Evening"] as const).map((period) =>
                  visibleGrouped[period].length > 0 ? (
                    <div key={period}>
                      <p className="body14 uppercase text-neutral-40 mb-2">
                        {period}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {visibleGrouped[period].map((slot) => {
                          const selected = time === slot.value;
                          return (
                            <button
                              key={slot.value}
                              type="button"
                              onClick={() => setTime(slot.value)}
                              className={cn(
                                "body16 border p-3 transition-colors cursor-pointer",
                                !selected && "border-neutral-deep-black text-neutral-deep-black hover:border-neutral-deep-black/50",
                                selected && "border-primary-yellow bg-primary-yellow text-neutral-10 !font-bold"
                              )}
                            >
                              {slot.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ) : null
                )}
              </div>
            ) : (
              <p className="text-sm text-gray-400 italic">
                No times left for this day — please pick another date.
              </p>
            )
          ) : (
            <p className="text-sm text-gray-400 italic">Pick a date to see available times.</p>
          )}
        </div>
      </div>

      {error && <p className="text-sm text-red-500 mt-4">{error}</p>}

      <div className="flex justify-end mt-6">
        <Button
          variant="outline"
          size="md"
          onClick={handleNext}
          className="bg-transparent"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
