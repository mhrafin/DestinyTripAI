import type { Metadata } from "next";
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
      className={` ${plusJakartaSans.variable} ${inter.className} h-full bg-background antialiased`}
    >
      <body className="min-h-full flex flex-col bg-blue-50">
        <header className="w-full py-4 border-b bg-blue-100">
          <h1 className="text-center text-2xl font-bold tracking-tight text-primary">
            DestinyTripAI
          </h1>
        </header>
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
