import type { Metadata } from "next";
import { CALCULATORS } from "@/lib/calculators/mortgage";
import MortgageClient from "./MortgageClient";
import Script from "next/script";

const seo = {
  title: "Mortgage Calculator | Monthly Payment, Amortization & Extra Payments",
  description:
    "Estimate your mortgage payment with taxes, insurance, amortization schedule, and extra payment impact. Compare payoff date and total interest clearly.",
  canonical: "https://mysmartcalculators.com/mortgage",
};
const meta = {
  title: seo.title,
  description: seo.description,
  canonical: seo.canonical,
};
const mortgageCalc = CALCULATORS.find((c) => c.id === "mortgage/calculator");

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: [
    "mortgage calculator",
    "home loan calculator",
    "monthly mortgage payment",
    "amortization schedule",
    "extra payment mortgage",
    "mortgage interest",
    "payoff date",
    "pmi calculator",
  ],
  alternates: {
    canonical: seo.canonical,
  },
  openGraph: {
    title: seo.title,
    description:
      "Estimate payment, payoff date, amortization, and extra-payment impact in one mortgage workflow.",
    url: seo.canonical,
    type: "website",
    images: [
      {
        url: "/og-main.png",
        width: 1200,
        height: 630,
        alt: "Mortgage Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: "Estimate payment, payoff date, and total interest with amortization details.",
    images: ["/og-main.png"],
  },
};

export default function CalcMortgagePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: meta?.title,
        description: meta?.description,
        url: meta?.canonical,
        inLanguage: "en-US",
        dateModified: "2026-03-21",
      },
      {
        "@type": "SoftwareApplication",
        name: meta?.title,
        operatingSystem: "All",
        applicationCategory: "FinanceApplication",
        description: meta?.description,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://mysmartcalculators.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Finance",
            item: "https://mysmartcalculators.com/finance",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Mortgage Calculator",
            item: meta?.canonical,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: mortgageCalc?.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        suppressHydrationWarning
      />
      <MortgageClient />
    </>
  );
}