import { Inter } from "next/font/google";
import "../globals.css";
import type { Metadata } from "next";
import Proivder from "./Provider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WealthWiseHub | Expert Financial Insights & Wealth Management",
  description: "WealthWiseHub is your ultimate destination for expert advice on personal finance, investment strategies, cryptocurrency, and financial freedom.",
  metadataBase: new URL("https://wealthwisehub.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "WealthWiseHub | Expert Financial Insights",
    description: "Empowering your financial journey with professional insights on investing and wealth management.",
    url: "https://wealthwisehub.vercel.app",
    siteName: "WealthWiseHub",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WealthWiseHub | Expert Financial Insights",
    description: "Expert advice on personal finance, investment strategies, and cryptocurrency.",
  },
  icons: {
    icon: "/favicon.svg",
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
