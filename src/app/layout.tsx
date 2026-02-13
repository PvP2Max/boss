import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  title: {
    default: "Fort Wainwright BOSS | Better Opportunities for Single Soldiers",
    template: "%s | Fort Wainwright BOSS",
  },
  description:
    "The Voice of the Single Soldier. Fort Wainwright BOSS (Better Opportunities for Single Soldiers) — the Army's Best BOSS Program 2025. Join us for community, events, and advocacy.",
  keywords: [
    "BOSS",
    "Fort Wainwright",
    "Better Opportunities for Single Soldiers",
    "Army",
    "Single Soldiers",
    "Alaska",
    "Military",
    "MWR",
  ],
  openGraph: {
    title: "Fort Wainwright BOSS",
    description:
      "The Voice of the Single Soldier. The Army's Best BOSS Program 2025.",
    type: "website",
    locale: "en_US",
    siteName: "Fort Wainwright BOSS",
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
