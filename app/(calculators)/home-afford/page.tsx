import type { Metadata } from "next";
import HomeAffordClient from "./HomeAffordClient";

const seo = {
  title: "Home Affordability Calculator | Budget, DTI, Down Payment & Monthly Cost",
  description:
    "Find how much home you can afford using income, debt, down payment, and housing cost assumptions. See budget range and monthly payment fit.",
  canonical: "https://mysmartcalculators.com/home-afford",
};
const meta = {
  title: seo.title,
  description: seo.description,
  canonical: seo.canonical,
};

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
    question: "Why does APR change affordability so quickly?",
    answer: "Small APR shifts can materially change monthly payment and maximum purchase power in long-term mortgages.",
  },
  {
    question: "Should I target the maximum affordability number?",
    answer: "Conservative buyers usually target below the maximum estimate to keep cash-flow headroom for maintenance and rate risk.",
  },
  {
    question: "Does this include taxes, insurance, and HOA?",
    answer: "Yes, the affordability model uses tax, insurance, and HOA assumptions as monthly ownership cost inputs.",
  },
  {
    question: "Is this lender approval?",
    answer: "No. It is planning guidance before lender underwriting.",
  },
] as const;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: [
    "home affordability calculator",
    "how much house can i afford",
    "dti calculator",
    "housing budget calculator",
    "down payment calculator",
    "mortgage affordability",
    "home buying budget",
    "monthly housing cost",
  ],
  alternates: {
    canonical: seo.canonical,
  },
  openGraph: {
    title: seo.title,
    description:
      "Estimate affordable home price range using income, debt, DTI, down payment, and monthly cost.",
    url: seo.canonical,
    type: "website",
    images: [
      {
        url: "/og-main.png",
        width: 1200,
        height: 630,
        alt: "Home Affordability Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: "Find your affordable home budget with DTI and payment-fit analysis.",
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
