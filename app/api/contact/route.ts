import { NextRequest, NextResponse } from "next/server";
import { resend, ADMIN_EMAIL, FROM_EMAIL } from "@/lib/email/resend";
import { contactFormSchema } from "@/lib/contact/validations/contact";
import {
  buildContactAdminEmail,
  buildContactConfirmationEmail,
} from "@/lib/contact/email/contact-templates";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      const firstError =
        parsed.error.issues[0]?.message || "Invalid form data.";
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const { fullName, email, serviceType, message } = parsed.data;

    const adminEmail = buildContactAdminEmail({
      fullName,
      email,
      serviceType,
      message,
    });
    const adminResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      replyTo: email,
      subject: adminEmail.subject,
      html: adminEmail.html,
    });

    if (adminResult.error) {
      console.error("[contact] Admin email failed:", adminResult.error);
      return NextResponse.json(
        {
          error:
            "We couldn't send your inquiry right now. Please try again shortly.",
        },
        { status: 502 },
      );
    }

    const confirmationEmail = buildContactConfirmationEmail({
      fullName,
      email,
      serviceType,
      message,
    });
    const userResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: confirmationEmail.subject,
      html: confirmationEmail.html,
    });

    if (userResult.error) {
      // Owner already has the inquiry — don't fail the whole request,
      // just log it so you can manually follow up.
      console.error("[contact] Confirmation email failed:", userResult.error);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
