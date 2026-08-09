"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { StepSlotSelection } from "./step-slot-selection";
import { StepPersonalDetails } from "./step-personal-details";
import { StepUploadDocuments } from "./step-upload-documents";
import type { PersonalDetailsValues } from "@/lib/validations/appointment";

export type Step = 1 | 2 | 3;

export interface BookingState {
  date: Date | undefined;
  time: string | undefined;
  details: PersonalDetailsValues | undefined;
}

const STEPS: { id: Step; label: string }[] = [
  { id: 1, label: "Select Your Slot" },
  { id: 2, label: "Enter Personal Details" },
  { id: 3, label: "Upload Documents" },
];

export function BookAppointmentForm() {
  const [step, setStep] = useState<Step>(1);
  const [state, setState] = useState<BookingState>({
    date: undefined,
    time: undefined,
    details: undefined,
  });

  return (
    <div className="bg-neutral-off-white p-6 sm:p-8">
      <h2 className=" title26 text-neutral-10 mb-4">Book Appointment</h2>

      {/* Step indicator */}
      <div className="flex items-center gap-4 mb-8 flex-wrap">
        {STEPS.map((s) => {
          const isComplete = step > s.id;
          const isActive = step === s.id;
          return (
            <div key={s.id} className="flex items-center gap-2">
              <span
                className={cn(
                  "flex h-5 w-5 items-center justify-center rounded-full body12 font-medium shrink-0",
                  isComplete && "bg-gray-900 text-white",
                  isActive && !isComplete && "bg-gray-900 text-white",
                  !isActive && !isComplete && "border border-neutral-light-grey text-neutral-light-grey"
                )}
              >
                {isComplete ? <Check className="h-3 w-3" /> : s.id}
              </span>
              <span
                className={cn(
                  "body18 !font-medium ",
                  isActive || isComplete ? "text-neutral-10" : "text-neutral-light-grey"
                )}
              >
                {s.label}
              </span>
            </div>
          );
        })}
      </div>

      {step === 1 && (
        <StepSlotSelection
          initialDate={state.date}
          initialTime={state.time}
          onNext={(date, time) => {
            setState((prev) => ({ ...prev, date, time }));
            setStep(2);
          }}
        />
      )}

      {step === 2 && (
        <StepPersonalDetails
          initialValues={state.details}
          onBack={() => setStep(1)}
          onNext={(details) => {
            setState((prev) => ({ ...prev, details }));
            setStep(3);
          }}
        />
      )}

      {step === 3 && state.date && state.time && state.details && (
        <StepUploadDocuments
          date={state.date}
          time={state.time}
          details={state.details}
          onBack={() => setStep(2)}
          onSlotTaken={() => {
            // Someone else grabbed this slot between step 1 and now.
            // Clear the time and send them back to the slot picker —
            // it will refetch availability and show it disabled,
            // no error message needed.
            setState((prev) => ({ ...prev, time: undefined }));
            setStep(1);
          }}
        />
      )}
    </div>
  );
}
