import type { Metadata } from "next";
import { getCalculatorMeta } from "@/lib/registry/calculators";
import RefinanceClient from "./RefinanceClient";

const id = "refinance";
const meta = getCalculatorMeta(id);

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
  title: meta?.title || "Refinance Calculator",
  description:
    meta?.description ||
    "Compare current mortgage vs refinance terms with break-even and total-cost analysis.",
  keywords: [
    "refinance calculator",
    "mortgage refinance calculator",
    "refinance break even",
    "refinance savings calculator",
    "refinance closing cost calculator",
  ],
  alternates: {
    canonical: meta?.canonical || "https://mysmartcalculators.com/refinance",
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
        alt: "Refinance calculator break-even and savings estimate",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        suppressHydrationWarning
      />
      <RefinanceClient />
    </>
  );
}
