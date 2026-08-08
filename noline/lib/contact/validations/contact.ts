import { z } from "zod";

export const SERVICE_TYPES = [
  "General Inquiry",
  "Notarization",
  "Document Review",
  "Affidavit",
  "Apostille",
  "Other",
] as const;

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name is too long"),
  email: z.string().min(1, "Email address is required").email("Enter a valid email address"),
  serviceType: z.enum(SERVICE_TYPES, {
    errorMap: () => ({ message: "Please select a service type" }),
  }),
  message: z.string().max(1000, "Message is too long").optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
