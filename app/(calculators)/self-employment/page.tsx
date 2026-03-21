import type { Metadata } from "next";
import { getCalculatorMeta } from "@/lib/registry/calculators";
import SelfEmploymentClient from "./SelfEmploymentClient";

const id = "self-employment";
const meta = getCalculatorMeta(id);

export const metadata: Metadata = {
  title: meta?.title,
  description: meta?.description,
  keywords: [
    "self-employment tax calculator",
    "schedule se calculator",
    "1099 tax estimator",
    "freelancer tax calculator",
    "quarterly estimated tax",
  ],
  alternates: {
    canonical: meta?.canonical,
  },
  openGraph: {
    title: meta?.title,
    description: meta?.description,
    url: meta?.canonical,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: meta?.title,
    description: meta?.description,
  },
};

export default function CalcSelfemploymentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: meta?.title,
        description: meta?.description,
        url: meta?.canonical,
        inLanguage: "en-US",
        dateModified: "2026-03-22",
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
            name: "Tax",
            item: "https://mysmartcalculators.com/tax",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Self-Employment Tax Calculator",
            item: meta?.canonical,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the self-employment tax rate?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The baseline self-employment tax rate is 15.3%, composed of 12.4% Social Security and 2.9% Medicare.",
            },
          },
          {
            "@type": "Question",
            name: "Why is only 92.35% of net profit taxed for SE tax?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Schedule SE applies a 92.35% multiplier to net profit before calculating Social Security and Medicare taxes.",
            },
          },
        ],
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
      <SelfEmploymentClient />
    </>
  );
}
