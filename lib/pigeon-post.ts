/**
 * Client for pigeon-post, the shared serverless email backend used across the
 * ebprojects sites (AWS Lambda + SES). Repo: ebprojects.pigeon-post.
 *
 * Both the contact form and the booking form post to /pigeonpost/contactus.
 * pigeon-post renders the customer's copy from a static HTML file with no
 * variable substitution, so the customer only ever gets a generic automated
 * acknowledgement. Everything specific to the submission reaches the business
 * through the notification email, whose only free-form field is QUERY.
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

export interface BookingPayload {
  fullName: string;
  email: string;
  secondSignerEmail?: string;
  phone: string;
  message?: string;
  dateLabel: string;
  timeLabel: string;
  attachments: File[];
}

/**
 * pigeon-post drops these values straight into the notification email's HTML
 * without escaping, so escape here rather than widen that behaviour upstream.
 */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
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

function baseUrl(): string {
  return process.env.PIGEON_POST_URL || DEFAULT_PIGEON_POST_URL;
}

async function assertOk(res: Response, label: string): Promise<void> {
  if (res.ok) return;
  const body = await res.text().catch(() => "");
  throw new Error(`pigeon-post ${label} responded ${res.status}: ${body.slice(0, 500)}`);
}

/**
 * Sends a contact form enquiry. pigeon-post emails both the customer (static
 * acknowledgement) and the business (the details below).
 *
 * Throws on transport failure or a non-2xx response. Note that pigeon-post
 * swallows SES errors internally and still returns 200, so a resolved call
 * means "accepted", not "delivered".
 */
export async function sendContactUsEmail(data: ContactUsPayload): Promise<void> {
  const { firstName, lastName } = splitName(data.fullName);
  const message = data.message?.trim();

  const query = message
    ? `[${data.serviceType}] ${message}`
    : `[${data.serviceType}] (no message provided)`;

  const res = await fetch(`${baseUrl()}/contactus`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client: {
        email: data.email,
        FIRST_NAME: escapeHtml(firstName),
        LAST_NAME: escapeHtml(lastName),
        QUERY: escapeHtml(query),
      },
      source: PIGEON_POST_SOURCE,
    }),
  });

  await assertOk(res, "contactus");
}

/**
 * Sends a booking. The customer gets a generic automated acknowledgement; the
 * business gets the uploaded affidavit and government ID plus the appointment
 * details in QUERY, which is the only free-form field its notification
 * template renders.
 *
 * Every value below is interpolated into email HTML on pigeon-post's side
 * without further escaping, so escape here.
 */
export async function sendBookingEmail(data: BookingPayload): Promise<void> {
  const { firstName, lastName } = splitName(data.fullName);
  const message = data.message?.trim();

  const query = [
    `[Booking] ${data.dateLabel}`,
    data.timeLabel,
    `Phone: ${data.phone}`,
    `Second signer: ${data.secondSignerEmail?.trim() || "—"}`,
    `Message: ${message || "—"}`,
  ].join(" | ");

  const body = new FormData();
  body.append(
    "data",
    JSON.stringify({
      client: {
        email: data.email,
        FIRST_NAME: escapeHtml(firstName),
        LAST_NAME: escapeHtml(lastName),
        QUERY: escapeHtml(query),
      },
      source: PIGEON_POST_SOURCE,
    }),
  );

  for (const file of data.attachments) {
    body.append("attachment", file, file.name);
  }

  // No explicit Content-Type — fetch sets the multipart boundary itself.
  const res = await fetch(`${baseUrl()}/contactus`, { method: "POST", body });

  await assertOk(res, "contactus (booking)");
}
