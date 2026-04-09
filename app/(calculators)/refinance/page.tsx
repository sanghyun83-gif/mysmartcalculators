import type { Metadata } from "next";
import RefinanceClient from "./RefinanceClient";
import Script from "next/script";

const seo = {
  title: "Refinance Calculator | Break-Even Analysis, Savings & New Payment",
  description:
    "Compare current loan vs refinance option with closing costs, monthly savings, break-even month, and long-term interest impact before you switch.",
  canonical: "https://mysmartcalculators.com/refinance",
};
const meta = {
  title: seo.title,
  description: seo.description,
  canonical: seo.canonical,
};

const REFINANCE_FAQ_SCHEMA = [
  {
    question: "When should I refinance?",
    answer:
      "Refinance is usually worth evaluating when you can lower APR, shorten term efficiently, or improve payment structure relative to your expected hold period.",
  },
  {
    question: "What is break-even month?",
    answer: "Break-even month is when accumulated monthly savings exceed refinance closing costs.",
  },
  {
    question: "Can fees erase rate savings?",
    answer:
      "Yes. A lower nominal rate can still lose on total economics when fees are high, so fee-aware APR should be reviewed.",
  },
  {
    question: "Should I roll costs into principal?",
    answer:
      "Rolling costs lowers upfront cash-to-close but increases principal and long-run interest cost.",
  },
  {
    question: "Do extra payments and biweekly strategies matter after refinance?",
    answer:
      "Yes. Acceleration strategies can reduce payoff months and total interest even after refinancing.",
  },
] as const;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: [
    "refinance calculator",
    "mortgage refinance calculator",
    "refinance break even",
    "refinance savings calculator",
    "closing costs refinance",
    "new mortgage payment",
    "refinance analysis",
    "loan refinance",
  ],
  alternates: {
    canonical: seo.canonical,
  },
  openGraph: {
    title: seo.title,
    description:
      "Compare refinance options with break-even timing, savings, and long-term cost impact.",
    url: seo.canonical,
    type: "website",
    images: [
      {
        url: "/og-main.png",
        width: 1200,
        height: 630,
        alt: "Refinance Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: "Run break-even and savings analysis before refinancing your loan.",
    images: ["/og-main.png"],
  },
};

export default function RefinancePage() {
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
        name: "Refinance Calculator",
        description: meta?.description,
        applicationCategory: "FinanceApplication",
        operatingSystem: "All",
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
            name: "Refinance Calculator",
            item: meta?.canonical || "https://mysmartcalculators.com/refinance",
          },
        ],
      },
      {
        "@type": "HowTo",
        name: "How to Evaluate a Refinance Offer",
        description:
          "Compare current mortgage terms versus refinance terms using break-even, lifetime savings, and fee-aware APR.",
        step: [
          {
            "@type": "HowToStep",
            text: "Enter current balance, APR, and remaining years.",
          },
          {
            "@type": "HowToStep",
            text: "Enter new APR, new term, and closing costs.",
          },
          {
            "@type": "HowToStep",
            text: "Review monthly savings, break-even month, and lifetime savings before deciding.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: REFINANCE_FAQ_SCHEMA.map((faq) => ({
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
      <RefinanceClient />
    </>
  );
}