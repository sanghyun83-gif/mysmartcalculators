import type { Metadata } from "next";
import { getCalculatorMeta } from "@/lib/registry/calculators";
import { CALCULATORS } from "@/lib/calculators/mortgage";
import MortgageClient from "./MortgageClient";

const id = "mortgage";
const meta = getCalculatorMeta(id);
const mortgageCalc = CALCULATORS.find((c) => c.id === "mortgage/calculator");

export const metadata: Metadata = {
  title: meta?.title,
  description: meta?.description,
  keywords: [
    "mortgage calculator",
    "mortgage payment calculator",
    "amortization schedule",
    "pmi calculator",
    "home loan calculator",
  ],
  alternates: {
    canonical: meta?.canonical,
  },
  openGraph: {
    title: meta?.title,
    description: meta?.description,
    url: meta?.canonical,
    type: "website",
    images: [
      {
        url: "/og-main.png",
        width: 1200,
        height: 630,
        alt: "Mortgage calculator monthly payment estimate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: meta?.title,
    description: meta?.description,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        suppressHydrationWarning
      />
      <MortgageClient />
    </>
  );
}
