import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privack Policy",
  description:
    "Privack Policy",
};

interface PrivacyPolicyPageLayout {
  children: React.ReactNode;
}

export default function PrivacyPolicyPageLayout({
  children,
}: PrivacyPolicyPageLayout) {
  return <main>{children}</main>;
}
