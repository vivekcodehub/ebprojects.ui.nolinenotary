"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Upload, CheckCircle2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
  MAX_FILE_SIZE_BYTES,
  MAX_FILE_SIZE_MB,
  ACCEPTED_FILE_TYPES,
  type PersonalDetailsValues,
} from "@/lib/validations/appointment";
import Calendar from "../svg-icons/Calendar";
import Button from "../ui/atoms/Button";

interface StepUploadDocumentsProps {
  date: Date;
  time: string; 
  details: PersonalDetailsValues;
  onBack: () => void;
  onSlotTaken: () => void;
}

function FileField({
  id,
  label,
  file,
  onChange,
  error,
}: {
  id: string;
  label: string;
  file: File | null;
  onChange: (file: File | null) => void;
  error?: string;
}) {
  return (
    <div>
      <Label htmlFor={id} className="body12 uppercase !font-medium text-primary-black">
        {label}
        <span className="text-red-500 ml-0.5">*</span>
        <span className="normal-case ml-1">(Max {MAX_FILE_SIZE_MB}MB)</span>
      </Label>
      <label
        htmlFor={id}
        className={cn(
          "mt-2 flex items-center justify-between  gap-3 border-b rounded-0 py-2.5 cursor-pointer text-sm text-gray-500 hover:border-gray-400",
          error ? "border-red-400" : "border-gray-200"
        )}
      >
        <div className="flex gap-4 items-center">
          <span className="body16 text-neutral-light-grey shrink-0">
            Choose file
          </span>
          <span className="truncate">{file ? file.name : ""}</span>
        </div>
        <Upload className="h-4 w-4 text-primary-black shrink-0" />
      </label>
      <input
        id={id}
        type="file"
        accept={ACCEPTED_FILE_TYPES.join(",")}
        className="hidden"
        onChange={(e) => onChange(e.target.files?.[0] ?? null)}
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

export function StepUploadDocuments({
  date,
  time,
  details,
  onBack,
  onSlotTaken,
}: StepUploadDocumentsProps) {
  const [affidavit, setAffidavit] = useState<File | null>(null);
  const [governmentId, setGovernmentId] = useState<File | null>(null);
  const [errors, setErrors] = useState<{ affidavit?: string; governmentId?: string }>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [hourStr, minuteStr] = time.split(":");
  const startLabel = format(new Date(date).setHours(Number(hourStr), Number(minuteStr)), "h:mm a");
  const endLabel = format(
    new Date(date).setHours(Number(hourStr), Number(minuteStr) + 15),
    "h:mm a"
  );
  const dateLabel = format(date, "EEEE, MMM d, yyyy");

  const validateFile = (file: File | null, label: string) => {
    if (!file) return `${label} is required`;
    if (file.size > MAX_FILE_SIZE_BYTES) return `${label} must be smaller than ${MAX_FILE_SIZE_MB}MB`;
    if (!ACCEPTED_FILE_TYPES.includes(file.type)) return `${label} must be a PDF, JPG or PNG file`;
    return undefined;
  };

  const handleSubmit = async () => {
    const affidavitError = validateFile(affidavit, "Affidavit");
    const govIdError = validateFile(governmentId, "Government ID");

    if (affidavitError || govIdError) {
      setErrors({ affidavit: affidavitError, governmentId: govIdError });
      return;
    }
    setErrors({});
    setSubmitError(null);
    setStatus("submitting");

    try {
      const formData = new FormData();
      formData.append("date", format(date, "yyyy-MM-dd"));
      formData.append("time", time);
      formData.append("fullName", details.fullName);
      formData.append("email", details.email);
      formData.append("secondSignerEmail", details.secondSignerEmail ?? "");
      formData.append("phone", details.phone);
      formData.append("message", details.message ?? "");
      formData.append("affidavit", affidavit as File);
      formData.append("governmentId", governmentId as File);

      const res = await fetch("/api/book-appointment", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 409) {
         
          onSlotTaken();
          return;
        }
        setSubmitError(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch (err) {
      setSubmitError("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center text-center py-10">
        <CheckCircle2 className="h-8 w-8 text-primary-yellow mb-3" />
        <h3 className="title20 font-semibold text-neutral-10">Appointment scheduled!</h3>
        <p className="body16 text-gray-500 mt-1 max-w-[540px]">
          A confirmation email has been sent to {details.email}. We&apos;ve also notified the team
          with your documents.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid sm:grid-cols-1 gap-5">
        <FileField
          id="affidavit"
          label="Upload your Affidavit to notarisation"
          file={affidavit}
          onChange={setAffidavit}
          error={errors.affidavit}
        />
        <FileField
          id="governmentId"
          label="Upload your government ID (Passport)"
          file={governmentId}
          onChange={setGovernmentId}
          error={errors.governmentId}
        />
      </div>

      <div className="mt-8 border border-neutral-40 p-4 flex flex-col items-start gap-3">
        <p className="body14 !font-medium uppercase text-neutral-10 mb-1">
          Selected Schedule
        </p>
        <div className="flex gap-4">
          <div className="h-12 w-12 rounded bg-neutral-10 flex items-center justify-center shrink-0">
            <Calendar className="h-5 w-5 text-primary-yellow" />
          </div>
          <div>
            <p className="body16 !font-medium text-neutral-deep-black">{dateLabel}</p>
            <p className="body16 text-neutral-40">
              {startLabel} – {endLabel} (15 Minutes)
            </p>
          </div>
        </div>
      </div>

      {submitError && <p className="text-sm text-red-500 mt-4">{submitError}</p>}

      <div className="flex justify-between mt-6">
        <Button
          type="button"
          variant="outline"
          size="md"
          onClick={onBack}
          disabled={status === "submitting"}
        >
          Previous
        </Button>
        <Button
          type="button"
          variant="primary"
          size="md"
          onClick={handleSubmit}
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Scheduling…" : "Schedule Appointment"}
        </Button>
      </div>
    </div>
  );
}
