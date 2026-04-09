import type { Metadata } from "next";
import SelfEmploymentClient from "./SelfEmploymentClient";
import Script from "next/script";

const seo = {
  title: "Self-Employment Tax Calculator 2026 | SE Tax, Deduction & Quarterly Planning",
  description:
    "Calculate 2026 self-employment tax, deductible half, and net impact from 1099 income. Includes scenario-based planning for quarterly estimated taxes.",
  canonical: "https://mysmartcalculators.com/self-employment",
};
const meta = {
  title: seo.title,
  description: seo.description,
  canonical: seo.canonical,
};

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: [
    "self-employment tax calculator",
    "1099 tax estimator",
    "freelancer tax calculator",
    "se tax calculator",
    "self employed tax deduction",
    "quarterly estimated tax",
    "contractor tax 2026",
    "schedule se calculator",
  ],
  alternates: {
    canonical: seo.canonical,
  },
  openGraph: {
    title: seo.title,
    description:
      "Estimate self-employment tax, deductible half, and quarterly planning needs for 1099 income.",
    url: seo.canonical,
    type: "website",
    images: [{ url: "/og-main.png", width: 1200, height: 630, alt: "Self-Employment Tax Calculator 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: "Calculate SE tax, deduction impact, and quarterly tax planning in one tool.",
    images: ["/og-main.png"],
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
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        suppressHydrationWarning
      />
      <SelfEmploymentClient />
    </>
  );
}