import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/contact/validations/contact";
import { sendContactUsEmail } from "@/lib/pigeon-post";

export const runtime = "nodejs";

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    console.error("[contact] RECAPTCHA_SECRET_KEY is not set");
    return false;
  }

  try {
    const res = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret, response: token }),
      },
    );
    const data = await res.json();
    return data.success === true;
  } catch (err) {
    console.error("[contact] reCAPTCHA verify failed:", err); 
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { recaptchaToken, ...values } = body;
    if (typeof recaptchaToken !== "string" || !recaptchaToken) {
      return NextResponse.json(
        { error: "Please complete the captcha." },
        { status: 400 },
      );
    }

    const captchaOk = await verifyRecaptcha(recaptchaToken);
    if (!captchaOk) {
      return NextResponse.json(
        { error: "Captcha verification failed. Please try again." },
        { status: 400 },
      );
    }

    const parsed = contactFormSchema.safeParse(values);

    if (!parsed.success) {
      const firstError =
        parsed.error.issues[0]?.message || "Invalid form data.";
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const { fullName, email, serviceType, message } = parsed.data;

    // pigeon-post sends both halves: the acknowledgement to the customer and
    // the enquiry details to the business inbox.
    try {
      await sendContactUsEmail({ fullName, email, serviceType, message });
    } catch (err) {
      console.error("[contact] pigeon-post request failed:", err);
      return NextResponse.json(
        {
          error:
            "We couldn't send your inquiry right now. Please try again shortly.",
        },
        { status: 502 },
      );
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
