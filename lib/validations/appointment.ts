import { z } from "zod";

export const MAX_FILE_SIZE_MB = 5;
export const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

export const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/jpg",
  "image/png",
];

// ---------- Step 1: Slot selection ----------
export const slotSelectionSchema = z.object({
  date: z.date({ required_error: "Please select a date" }),
  time: z.string({ required_error: "Please select a time slot" }).min(1, "Please select a time slot"),
});
export type SlotSelectionValues = z.infer<typeof slotSelectionSchema>;

// ---------- Step 2: Personal details ----------
export const personalDetailsSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name is too long"),
  email: z.string().min(1, "Email address is required").email("Enter a valid email address"),
  secondSignerEmail: z
    .string()
    .email("Enter a valid email address")
    .optional()
    .or(z.literal("")),
  phone: z
    .string()
    .min(7, "Enter a valid phone number")
    .max(20, "Enter a valid phone number")
    .regex(/^[0-9+\-\s()]+$/, "Enter a valid phone number"),
  message: z.string().max(1000, "Message is too long").optional().or(z.literal("")),
});
export type PersonalDetailsValues = z.infer<typeof personalDetailsSchema>;

// ---------- Step 3: Document uploads (client-side, browser File) ----------
function fileSchema(label: string) {
  return z
    .instanceof(File, { message: `${label} is required` })
    .refine((file) => file.size > 0, `${label} is required`)
    .refine((file) => file.size <= MAX_FILE_SIZE_BYTES, `${label} must be smaller than ${MAX_FILE_SIZE_MB}MB`)
    .refine(
      (file) => ACCEPTED_FILE_TYPES.includes(file.type),
      `${label} must be a PDF, JPG or PNG file`
    );
}

export const uploadDocumentsSchema = z.object({
  affidavit: fileSchema("Affidavit to notarisation"),
  governmentId: fileSchema("Government ID (Passport)"),
});
export type UploadDocumentsValues = z.infer<typeof uploadDocumentsSchema>;

// ---------- Full combined shape used once all steps are complete ----------
export type AppointmentFormValues = SlotSelectionValues &
  PersonalDetailsValues &
  UploadDocumentsValues;
