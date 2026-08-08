import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nolinenotary.com//"),
  title: "No Line Notary | Online Remote Notarization Services",
  description:
    "Notarize your documents online, 24/7. No Line Notary offers secure remote notarization — upload, review, sign, and return documents from anywhere.",
  keywords: [
    "online notary",
    "remote notarization",
    "notarize documents online",
    "e-notary",
    "virtual notary services",
  ],
  alternates: {
    canonical: "https://nolinenotary.com/",
  },
  openGraph: {
    title: "No Line Notary | Online Remote Notarization Services",
    description:
      "Notarize your documents online, 24/7. Secure, remote, and available anytime.",
    url: "https://nolinenotary.com/",
    siteName: "No Line Notary",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "No Line Notary | Online Remote Notarization Services",
    description: "Notarize your documents online, 24/7.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
