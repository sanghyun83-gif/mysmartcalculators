import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { GlobalFooter } from "@/components/GlobalFooter";
import GlobalHeader from "@/components/v3/GlobalHeader";
import LayoutWrapper from "@/components/LayoutWrapper";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-CLQYC4HRE3";
const ADSENSE_ID = "ca-pub-6678501910155801";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mysmartcalculators.com"),
  title: "MySmartCalculators | 100+ Free Legal, Finance & Insurance Calculators",
  description: "Free online calculators for legal settlements, personal injury claims, mortgage, taxes, insurance, and more. Accurate 2026 calculations based on real data.",
  keywords: ["calculator", "settlement calculator", "injury calculator", "mortgage calculator", "tax calculator", "insurance calculator", "legal calculator"],
  verification: { google: "qlPMVO_Hb-be3_hFHNT9SBbsHO-b_wCOfWfLmTb4EQc" },
  openGraph: {
    title: "MySmartCalculators | 100+ Free Calculators",
    description: "Free online calculators for legal, finance, and insurance.",
    type: "website",
    url: "https://mysmartcalculators.com",
    images: [
      {
        url: "/og-main.png",
        width: 1200,
        height: 630,
        alt: "MySmartCalculators Global Search Engine",
      }
    ],
  },
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-slate-900 text-white min-h-screen flex flex-col`}>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}');`}
        </Script>
        <Script
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
        <Analytics />
      </body>
    </html>
  );
}
