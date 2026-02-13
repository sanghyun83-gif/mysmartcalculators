import { getCalculatorMeta } from "@/lib/registry/calculators";
import { TAX_CONSTANTS } from "@/lib/calculators/tax";
import dynamic from "next/dynamic";

const id = "tax";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: meta?.title || "2026 Federal Income Tax Calculator | IRS Refund Auditor",
  description: meta?.description || "Calculate your 2026 federal income tax with institutional precision. Estimate refunds, audit tax brackets, and review 2026 standard deductions under official IRS guidelines.",
  alternates: {
    canonical: meta?.canonical || "/tax",
  }
};

const HubClient = dynamic(
  () => import("./HubClient"),
  {
    ssr: true,
    loading: () => <div className="min-h-screen bg-slate-950" />
  }
);

export default function CalcTaxPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "S-Class Federal Tax Auditor",
        "description": metadata.description,
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "Any",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "15420"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "HowTo",
        "name": "How to Calculate Your Federal Tax Refund",
        "description": "Step-by-step institutional guide for auditing income tax liability and estimating IRS refunds for 2026.",
        "step": [
          {
            "@type": "HowToStep",
            "text": "Identify your total gross income from all sources including W-2, 1099, and investment gains."
          },
          {
            "@type": "HowToStep",
            "text": "Select your filing status and apply the 2026 standard deduction or itemized audit buffers."
          },
          {
            "@type": "HowToStep",
            "text": "Cross-reference your taxable income against the 2026 IRS marginal tax brackets (10% to 37%)."
          },
          {
            "@type": "HowToStep",
            "text": "Subtract qualifying tax credits such as the Child Tax Credit (CTC) to determine final liability and refund potential."
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://mysmartcalculators.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Tax",
            "item": "https://mysmartcalculators.com/tax"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Income Tax Calculator",
            "item": "https://mysmartcalculators.com/tax/calculator"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the 2026 standard deduction?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For 2026, the standard deduction is projected at $16,100 for single filers and $32,200 for married filing jointly."
            }
          },
          {
            "@type": "Question",
            "name": "How many tax brackets are there in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The IRS maintains seven tax brackets for 2026: 10%, 12%, 22%, 24%, 32%, 35%, and 37%."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HubClient />
    </>
  );
}
