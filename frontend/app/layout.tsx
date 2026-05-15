import type { Metadata } from "next";
// import { inter, plusJakartaSans } from "./fonts";

import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  // weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "DestinyTripAI",
  description: "Find your next trip!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` ${plusJakartaSans.variable} ${inter.className} h-full bg-background/50 antialiased`}
    >
      <body className="">{children}</body>
    </html>
  );
}
