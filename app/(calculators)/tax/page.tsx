import type { Metadata } from "next";
import { getCalculatorMeta } from "@/lib/registry/calculators";
import TaxClient from "./TaxClient";

const id = "tax";
const meta = getCalculatorMeta(id);

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
  title: meta?.title || "2026 Federal Income Tax Calculator | IRS Refund Auditor",
  description:
    meta?.description ||
    "Calculate your 2026 federal income tax with bracket breakdown, refund planning, lifecycle simulation, and sensitivity analysis.",
  keywords: [
    "tax calculator 2026",
    "federal income tax calculator",
    "tax bracket calculator",
    "refund estimator",
    "effective tax rate calculator",
  ],
  alternates: {
    canonical: meta?.canonical || "https://mysmartcalculators.com/tax",
  },
  openGraph: {
    title: meta?.title || "2026 Federal Income Tax Calculator | IRS Refund Auditor",
    description:
      meta?.description ||
      "Federal tax estimate with bracket audit, filing lifecycle planning, and scenario sensitivity profiles.",
    url: meta?.canonical || "https://mysmartcalculators.com/tax",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: meta?.title || "2026 Federal Income Tax Calculator | IRS Refund Auditor",
    description:
      meta?.description ||
      "Bracket breakdown + refund/owed forecast + overdrive decision support for tax filing.",
  },
};

export default function TaxPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: metadata.title,
        description: metadata.description,
        url: metadata.alternates?.canonical,
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
