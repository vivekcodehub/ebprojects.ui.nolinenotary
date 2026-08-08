import { Resend } from "resend";

if (!process.env.RESEND_API_KEY) {
  // Don't throw at import time in dev if the key is missing, but make it loud.
  console.warn(
    "[email] RESEND_API_KEY is not set. Add it to .env.local — see README for setup."
  );
}

export const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * The address your appointment notifications get sent to.
 * Defaults to asishkv1993@gmail.com but can be overridden via env.
 */
export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "asishkv1993@gmail.com";

/**
 * The "From" address Resend sends as.
 * IMPORTANT: On Resend's free tier, until you verify your own domain
 * (Resend > Domains), you can only send FROM "onboarding@resend.dev".
 * Once you verify a domain you own, switch this to something like
 * "Appointments <bookings@yourdomain.com>".
 */
export const FROM_EMAIL = process.env.FROM_EMAIL || "Appointments <onboarding@resend.dev>";
