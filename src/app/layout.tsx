import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Navbar } from "@/components/sections/Navbar";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nexora Labs — High-Performance Websites for Startups & Growing Businesses",
  description:
    "Nexora Labs is a digital agency specializing in high-performance websites built for speed, conversion, and long-term growth. We help startups and growing businesses scale with strategy-driven web solutions.",
  keywords: [
    "web design",
    "web development",
    "digital agency",
    "startup websites",
    "high-performance websites",
    "Nexora Labs",
  ],
  openGraph: {
    title: "Nexora Labs — Digital Solutions That Drive Growth",
    description:
      "We build websites that turn traffic into real customers, not just clicks.",
    type: "website",
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
      className={`${playfair.variable} ${inter.variable} ${cormorant.variable} h-full`}
    >
      <body
        className="min-h-full bg-bg-cream text-text-dark font-body antialiased"
        suppressHydrationWarning
      >
        <SmoothScrollProvider>
          <CustomCursor />
          <Navbar />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
