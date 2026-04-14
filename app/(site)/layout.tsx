import { Inter } from "next/font/google";
import "../globals.css";
import type { Metadata } from "next";
import Proivder from "./Provider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "WealthPilot | Expert Financial Insights & Wealth Management",
    template: "%s | WealthPilot",
  },
  description: "WealthPilot is your ultimate destination for expert advice on personal finance, investment strategies, cryptocurrency, and financial freedom.",
  keywords: ["personal finance", "investing", "wealth management", "cryptocurrency", "financial freedom", "budgeting", "loans"],
  authors: [{ name: "WealthPilot Team" }],
  creator: "WealthPilot",
  metadataBase: new URL("https://wealthpilot.blog"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "WealthPilot | Expert Financial Insights",
    description: "Empowering your financial journey with professional insights on investing and wealth management.",
    url: "https://wealthpilot.blog",
    siteName: "WealthPilot",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "WealthPilot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WealthPilot | Expert Financial Insights",
    description: "Expert advice on personal finance, investment strategies, and cryptocurrency.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="suwBMyzXLvp7WY_0KnvEZhitaPuMooCBX_BSVs0Qg5s"
        />
        {/* Google AdSense Script Placeholder */}
        {/* Replace 'ca-pub-XXXXXXXXXXXXXXXX' with your actual AdSense Publisher ID */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`dark:bg-black ${inter.className}`}>
        <Proivder>{children}</Proivder>
      </body>
    </html>
  );
}
