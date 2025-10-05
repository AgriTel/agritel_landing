import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AgriTel Farming Solutions | Insight-driven agriculture for a sustainable tomorrow",
  description: "AgriTel leverages IoT, AI, and meteorological data to provide actionable insights to smallholder farmers. Empowering farmers with smart farming solutions for sustainable agriculture.",
  keywords: "smart farming, agriculture technology, IoT farming, AI agriculture, weather forecasting, pest prediction, sustainable farming, AgriTel",
  authors: [{ name: "AgriTel Farming Solutions" }],
  openGraph: {
    title: "AgriTel Farming Solutions | Smart Agriculture Technology",
    description: "Insight-driven agriculture for a sustainable tomorrow. IoT-powered farming solutions for smallholder farmers.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgriTel Farming Solutions",
    description: "Insight-driven agriculture for a sustainable tomorrow",
    creator: "@ElikemSunu24267",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

      </body>
    </html>
  );
}
