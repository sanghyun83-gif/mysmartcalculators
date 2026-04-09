import type { Metadata } from "next";
import { LOAN_2026 } from "@/lib/calculators/loan";
import LoanClient from "./LoanClient";
import Script from "next/script";

const seo = {
  title: "Loan Calculator | Monthly Payment, Interest Cost & Payoff Timeline",
  description:
    "Calculate loan payments, total interest, and payoff timeline in seconds. Test term, rate, and extra payment scenarios for smarter borrowing decisions.",
  canonical: "https://mysmartcalculators.com/loan",
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
    "loan calculator",
    "personal loan calculator",
    "monthly payment calculator",
    "loan interest calculator",
    "loan payoff calculator",
    "amortization schedule",
    "extra payment loan",
    "borrowing cost",
  ],
  alternates: {
    canonical: seo.canonical,
  },
  openGraph: {
    title: seo.title,
    description:
      "Calculate monthly payment, total interest, and payoff timeline with scenario testing.",
    url: seo.canonical,
    type: "website",
    images: [
      {
        url: "/og-main.png",
        width: 1200,
        height: 630,
        alt: "Loan Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: "Estimate loan payment, interest cost, and payoff timeline instantly.",
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
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        suppressHydrationWarning
      />
      <LoanClient />
    </>
  );
}