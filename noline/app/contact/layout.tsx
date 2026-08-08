import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | No Line Notary",
  description:
    "Have a question or need a custom notary service? Reach out to No Line Notary's registry team — we respond within 2 business hours.",
  alternates: {
    canonical: "https://nolinenotary.com/contact",
  },
  openGraph: {
    title: "Contact Us | No Line Notary",
    description:
      "Reach out to No Line Notary's registry team — we respond within 2 business hours.",
    url: "https://nolinenotary.com/contact",
    siteName: "No Line Notary",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
};

interface ContactPageLayout {
  children: React.ReactNode;
}

export default function ContactPageLayout({
  children,
}: ContactPageLayout) {
  return <main>{children}</main>;
}
