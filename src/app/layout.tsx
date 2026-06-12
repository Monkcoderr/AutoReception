import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://autoreception.app"),
  title: "AutoReception — Your 24/7 AI WhatsApp Receptionist",
  description:
    "Turn your WhatsApp into a 24/7 smart AI receptionist for your salon, clinic or gym. It answers FAQs, captures leads, and books appointments while you focus on your business.",
  keywords: [
    "WhatsApp AI",
    "AI receptionist",
    "salon booking",
    "clinic appointments",
    "gym CRM",
    "lead capture",
  ],
  openGraph: {
    title: "AutoReception — Your 24/7 AI WhatsApp Receptionist",
    description:
      "Never miss a customer because you were too busy to reply. AI that answers, captures leads, and books appointments on WhatsApp.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
