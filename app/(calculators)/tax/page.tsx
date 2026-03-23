import type { Metadata } from "next";
import TaxClient from "./TaxClient";

const seo = {
  title: "Tax Calculator 2026 | Federal Income Tax, Effective Rate & Take-Home",
  description:
    "Estimate 2026 federal tax, effective rate, and take-home income by filing status. Includes bracket-based logic and practical planning scenarios.",
  canonical: "https://mysmartcalculators.com/tax",
};

const faqSchema = [
  {
    question: "How does this tax calculator estimate federal tax?",
    answer:
      "It applies filing-status deduction, progressive IRS bracket math, and credit adjustments to estimate final federal liability.",
  },
  {
    question: "Does it show refund versus amount owed?",
    answer:
      "Yes. The model compares withholding against calculated liability and returns refund or amount owed.",
  },
  {
    question: "Can I stress-test assumptions?",
    answer:
      "Yes. The sensitivity lab compares conservative, base, and upside profiles using the same bracket engine.",
  },
] as const;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: [
    "tax calculator 2026",
    "federal income tax calculator",
    "income tax calculator",
    "effective tax rate calculator",
    "take home pay tax",
    "tax bracket calculator",
    "filing status tax",
    "tax estimate",
  ],
  alternates: {
    canonical: seo.canonical,
  },
  openGraph: {
    title: seo.title,
    description:
      "Estimate federal income tax, effective rate, and take-home income with bracket logic.",
    url: seo.canonical,
    type: "website",
    images: [{ url: "/og-main.png", width: 1200, height: 630, alt: "Tax Calculator 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: "Estimate 2026 federal income tax, effective rate, and take-home pay.",
    images: ["/og-main.png"],
  },
};

export default function TaxPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: seo.title,
        description: seo.description,
        url: seo.canonical,
        inLanguage: "en-US",
        dateModified: "2026-03-21",
      },
      {
        "@type": "SoftwareApplication",
        name: "Tax Calculator",
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
        name: "How to estimate federal tax liability",
        step: [
          { "@type": "HowToStep", text: "Enter income, filing status, dependents, and withholding." },
          { "@type": "HowToStep", text: "Run bracket engine and inspect marginal/effective rates." },
          { "@type": "HowToStep", text: "Use sensitivity and readiness blocks before filing." },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqSchema.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <TaxClient />
    </>
  );
}
