interface ContactEmailData {
  fullName: string;
  email: string;
  serviceType: string;
  message?: string;
}

const wrapper = (content: string) => `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #1f2937;">
  <div style="background: #f4a939; padding: 24px 32px; border-radius: 8px 8px 0 0;">
    <h1 style="color: #1f2937; font-size: 18px; margin: 0; letter-spacing: 0.02em;">SERVICE INQUIRY</h1>
  </div>
  <div style="border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px; padding: 32px;">
    ${content}
  </div>
  <p style="color: #9ca3af; font-size: 12px; text-align: center; margin-top: 16px;">
    This is an automated message from your website's contact form.
  </p>
</div>
`;

const row = (label: string, value: string) => `
  <tr>
    <td style="padding: 8px 0; color: #6b7280; font-size: 13px; width: 140px; vertical-align: top;">${label}</td>
    <td style="padding: 8px 0; color: #111827; font-size: 14px;">${value || "—"}</td>
  </tr>
`;

/** Sent to the owner/admin inbox with the full inquiry. */
export function buildContactAdminEmail(data: ContactEmailData) {
  const html = wrapper(`
    <p style="font-size: 15px; margin-top: 0;">A new service inquiry was submitted.</p>
    <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
      ${row("Full Name", data.fullName)}
      ${row("Email", data.email)}
      ${row("Service Type", data.serviceType)}
      ${row("Message", data.message || "—")}
    </table>
  `);

  return {
    subject: `New Service Inquiry: ${data.fullName} — ${data.serviceType}`,
    html,
  };
}

/** Sent to the person who submitted the inquiry. */
export function buildContactConfirmationEmail(data: ContactEmailData) {
  const html = wrapper(`
    <p style="font-size: 15px; margin-top: 0;">Hi ${data.fullName},</p>
    <p style="font-size: 14px; line-height: 1.6;">
      Thanks for reaching out. We've received your request regarding
      <strong>${data.serviceType}</strong> and our registry team will respond within
      2 business hours.
    </p>
    <p style="font-size: 14px; line-height: 1.6;">
      If you need to add anything in the meantime, just reply to this email.
    </p>
    <p style="font-size: 14px; margin-bottom: 0;">Talk soon!</p>
  `);

  return {
    subject: "We've received your inquiry",
    html,
  };
}
