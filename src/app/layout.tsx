import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Providers } from "./providers";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { MobileNav } from "@/components/layout/mobile-nav";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://futarchy.olympiadao.org"),
  title: {
    default: "Olympia Futarchy — Prediction Markets for Ethereum Classic",
    template: "%s | Olympia Futarchy",
  },
  description:
    "Prediction market governance for Ethereum Classic. Trade on proposal outcomes, resolve via oracles, and settle on-chain.",
  keywords: [
    "Ethereum Classic",
    "ETC",
    "Olympia",
    "futarchy",
    "prediction markets",
    "governance",
    "oracles",
    "ECIP-1117",
  ],
  authors: [
    { name: "Cody Burns", url: "https://github.com/realcodywburns" },
    { name: "Chris Mercer", url: "https://github.com/chris-mercer" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://futarchy.olympiadao.org",
    siteName: "Olympia Futarchy",
    title: "Olympia Futarchy — Prediction Markets for Ethereum Classic",
    description: "Trade on governance outcomes. Futarchy for ETC.",
    images: [
      {
        url: "https://futarchy.olympiadao.org/og-image.png",
        width: 1200,
        height: 630,
        alt: "Olympia Futarchy Prediction Markets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olympia Futarchy — Prediction Markets for Ethereum Classic",
    description: "Prediction market governance for ETC",
    images: ["https://futarchy.olympiadao.org/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-bg-primary text-text-primary antialiased">
        <Providers>
          <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex flex-1 flex-col md:pl-64">
              <Header />
              <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
                {children}
              </main>
            </div>
          </div>
          <MobileNav />
        </Providers>
      </body>
    </html>
  );
}
