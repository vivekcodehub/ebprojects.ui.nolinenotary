import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privack Policy",
  description:
    "Privack Policy",
};

interface TermsOfServicePageLayout {
  children: React.ReactNode;
}

export default function TermsOfServicePageLayout({
  children,
}: TermsOfServicePageLayout) {
  return <main>{children}</main>;
}
