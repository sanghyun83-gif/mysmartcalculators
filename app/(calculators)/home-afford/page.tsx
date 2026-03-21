import type { Metadata } from "next";
import { getCalculatorMeta } from "@/lib/registry/calculators";
import HomeAffordClient from "./HomeAffordClient";

const id = "home-afford";
const meta = getCalculatorMeta(id);

const FAQ_SCHEMA = [
  {
    question: "How much house can I afford?",
    answer:
      "The estimate uses income, debts, down payment, APR, and monthly ownership costs under a DTI guardrail.",
  },
  {
    question: "What does the 28/36 rule mean?",
    answer: "It is a planning benchmark for housing ratio and total debt ratio.",
  },
  {
    question: "Is this lender approval?",
    answer: "No. It is planning guidance before lender underwriting.",
  },
] as const;

export const metadata: Metadata = {
  title: meta?.title || "Home Affordability Calculator",
  description:
    meta?.description ||
    "Estimate affordable home price based on income, debt, and mortgage assumptions.",
  keywords: [
    "home affordability calculator",
    "how much house can i afford",
    "affordable home price calculator",
    "mortgage affordability",
    "dti home affordability",
  ],
  alternates: {
    canonical: meta?.canonical || "https://mysmartcalculators.com/home-afford",
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
        alt: "Home affordability calculator estimate",
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

export default function HomeAffordPage() {
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
        name: "Home Affordability Calculator",
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
        "@type": "HowTo",
        name: "How to Estimate Home Affordability",
        step: [
          { "@type": "HowToStep", text: "Enter annual income and monthly debts." },
          { "@type": "HowToStep", text: "Set down payment, APR, and monthly ownership assumptions." },
          { "@type": "HowToStep", text: "Calculate and compare baseline and stress scenarios." },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://mysmartcalculators.com/" },
          { "@type": "ListItem", position: 2, name: "Finance", item: "https://mysmartcalculators.com/finance" },
          { "@type": "ListItem", position: 3, name: "Home Affordability Calculator", item: meta?.canonical || "https://mysmartcalculators.com/home-afford" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQ_SCHEMA.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
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
      <HomeAffordClient />
    </>
  );
}
