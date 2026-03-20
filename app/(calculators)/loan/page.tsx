import type { Metadata } from "next";
import { getCalculatorMeta } from "@/lib/registry/calculators";
import { LOAN_2026 } from "@/lib/calculators/loan";
import LoanClient from "./LoanClient";

const id = "loan";
const meta = getCalculatorMeta(id);

export const metadata: Metadata = {
  title: meta?.title || "Loan Calculator & Amortization",
  description:
    meta?.description ||
    "Calculate monthly payment, total interest, and payoff date with an amortized loan model.",
  keywords: [
    "loan calculator",
    "loan payment calculator",
    "amortization calculator",
    "personal loan calculator",
    "loan payoff date",
  ],
  alternates: {
    canonical: meta?.canonical || "https://mysmartcalculators.com/loan",
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
        alt: "Loan calculator monthly payment estimate",
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

export default function LoanPage() {
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
        name: "Loan Calculator",
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
        name: "How to Calculate Loan Payments",
        description: "Estimate monthly payments and interest using amount, APR, and term.",
        step: [
          {
            "@type": "HowToStep",
            text: "Enter loan amount.",
          },
          {
            "@type": "HowToStep",
            text: "Enter APR, loan term, and loan start date.",
          },
          {
            "@type": "HowToStep",
            text: "Click Calculate Loan and review payment, interest, amortization, and payoff metrics.",
          },
        ],
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
            name: "Loan Calculator",
            item: meta?.canonical || "https://mysmartcalculators.com/loan",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: LOAN_2026.faqs.map((faq) => ({
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
      <LoanClient />
    </>
  );
}
