/**
 * Client for pigeon-post, the shared serverless email backend used across the
 * ebprojects sites (AWS Lambda + SES). Repo: ebprojects.pigeon-post.
 *
 * Only the contact form goes through here. Booking confirmations still use
 * Resend, because pigeon-post renders customer emails from static HTML files
 * with no variable substitution — it cannot state an appointment date/time.
 */

const DEFAULT_PIGEON_POST_URL =
  "https://jutxnn1a0a.execute-api.us-east-1.amazonaws.com/v1/pigeonpost";

/** The `source` key registered for this site in pigeon-post's mapper/config. */
export const PIGEON_POST_SOURCE = "noline";

export interface ContactUsPayload {
  fullName: string;
  email: string;
  serviceType: string;
  message?: string;
}

/**
 * pigeon-post expects a first/last name pair. Split on the first space and put
 * the remainder in LAST_NAME so multi-word surnames survive intact.
 */
function splitName(fullName: string): { firstName: string; lastName: string } {
  const trimmed = fullName.trim();
  const firstSpace = trimmed.indexOf(" ");

  if (firstSpace === -1) return { firstName: trimmed, lastName: "" };

  return {
    firstName: trimmed.slice(0, firstSpace),
    lastName: trimmed.slice(firstSpace + 1).trim(),
  };
}

/**
 * pigeon-post's notification email only renders FIRST_NAME, LAST_NAME, email
 * and QUERY, so the service type has to ride along inside QUERY to reach the
 * business inbox at all.
 */
function buildQuery(serviceType: string, message?: string): string {
  const trimmed = message?.trim();
  return trimmed ? `[${serviceType}] ${trimmed}` : `[${serviceType}] (no message provided)`;
}

/**
 * Sends the enquiry to pigeon-post, which emails both the customer (static
 * acknowledgement) and the business (the details below).
 *
 * Throws on transport failure or a non-2xx response. Note that pigeon-post
 * swallows SES errors internally and still returns 200, so a resolved call
 * means "accepted", not "delivered".
 */
export async function sendContactUsEmail(data: ContactUsPayload): Promise<void> {
  const baseUrl = process.env.PIGEON_POST_URL || DEFAULT_PIGEON_POST_URL;
  const { firstName, lastName } = splitName(data.fullName);

  const res = await fetch(`${baseUrl}/contactus`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client: {
        email: data.email,
        FIRST_NAME: firstName,
        LAST_NAME: lastName,
        QUERY: buildQuery(data.serviceType, data.message),
      },
      source: PIGEON_POST_SOURCE,
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`pigeon-post responded ${res.status}: ${body.slice(0, 500)}`);
  }
}
