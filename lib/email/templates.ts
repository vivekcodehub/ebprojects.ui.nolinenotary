interface AppointmentEmailData {
  fullName: string;
  email: string;
  secondSignerEmail?: string;
  phone: string;
  message?: string;
  dateLabel: string; // e.g. "Saturday, Oct 12, 2024"
  timeLabel: string; // e.g. "1:00 PM – 1:15 PM"
}

const wrapper = (content: string) => `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #1f2937;">
  <div style="background: #f97316; padding: 24px 32px; border-radius: 8px 8px 0 0;">
    <h1 style="color: #ffffff; font-size: 18px; margin: 0; letter-spacing: 0.02em;">BOOK APPOINTMENT</h1>
  </div>
  <div style="border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px; padding: 32px;">
    ${content}
  </div>
  <p style="color: #9ca3af; font-size: 12px; text-align: center; margin-top: 16px;">
    This is an automated message from your appointment booking form.
  </p>
</div>
`;

const row = (label: string, value: string) => `
  <tr>
    <td style="padding: 8px 0; color: #6b7280; font-size: 13px; width: 160px; vertical-align: top;">${label}</td>
    <td style="padding: 8px 0; color: #111827; font-size: 14px;">${value || "—"}</td>
  </tr>
`;

/** Sent to the admin/business inbox with the full submission + attachments. */
export function buildAdminNotificationEmail(data: AppointmentEmailData) {
  const html = wrapper(`
    <p style="font-size: 15px; margin-top: 0;">A new appointment has been booked.</p>
    <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
      ${row("Date", data.dateLabel)}
      ${row("Time", data.timeLabel)}
      ${row("Full Name", data.fullName)}
      ${row("Email", data.email)}
      ${row("Second Signer", data.secondSignerEmail || "—")}
      ${row("Phone", data.phone)}
      ${row("Message", data.message || "—")}
    </table>
    <p style="font-size: 13px; color: #6b7280;">
      The Affidavit and Government ID documents are attached to this email.
    </p>
  `);

  return {
    subject: `New Appointment: ${data.fullName} — ${data.dateLabel}`,
    html,
  };
}

/** Sent to the person who booked, confirming their appointment. */
export function buildUserConfirmationEmail(data: AppointmentEmailData) {
  const html = wrapper(`
    <p style="font-size: 15px; margin-top: 0;">Hi ${data.fullName},</p>
    <p style="font-size: 14px; line-height: 1.6;">
      Thanks for booking an appointment. Here are your details:
    </p>
    <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
      ${row("Date", data.dateLabel)}
      ${row("Time", data.timeLabel)}
      ${row("Name", data.fullName)}
      ${row("Phone", data.phone)}
    </table>
    <p style="font-size: 14px; line-height: 1.6;">
      We've received your uploaded documents and will follow up if anything else is needed.
      If you need to reschedule or have any questions, just reply to this email.
    </p>
    <p style="font-size: 14px; margin-bottom: 0;">See you soon!</p>
  `);

  return {
    subject: `Your appointment is confirmed — ${data.dateLabel}`,
    html,
  };
}
