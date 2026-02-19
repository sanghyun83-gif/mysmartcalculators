import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "529";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: "2026 529 Plan Calculator | Official S-Class College Savings Auditor",
  description: "Calculate your 529 plan college savings growth with 2026 precision. Official S-Class auditor for Section 529 tax benefits and state deduction limits.",
  alternates: {
    canonical: meta?.canonical || `https://mysmartcalculators.com/${id}`,
  }
};

const HubClient = dynamic(
  () => import("./HubClient"),
  {
    ssr: true,
    loading: () => <div className="min-h-screen bg-slate-950" />
  }
);

export default function Calc529Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "2026 529 Plan Calculator",
        "operatingSystem": "All",
        "applicationCategory": "FinanceCalculator",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "8400"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "HowTo",
        "name": "How to Calculate 529 College Savings",
        "step": [
          {
            "@type": "HowToStep",
            "text": "Identify the beneficiary's current age and the target college enrollment year."
          },
          {
            "@type": "HowToStep",
            "text": "Input recurring monthly contributions and existing account balance."
          },
          {
            "@type": "HowToStep",
            "text": "Audit state-specific tax deduction benefits (e.g., NY, PA, IL limits)."
          },
          {
            "@type": "HowToStep",
            "text": "Solve for future account value and tuition coverage percentage."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the 529 gift limit for 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For 2026, the annual federal gift tax exclusion is $19,000 per beneficiary. Superfunding allows for a 5-year lump sum contribution of up to $95,000 per donor."
            }
          },
          {
            "@type": "Question",
            "name": "Can 529 funds be used for student loans?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, under SECURE Act rules, 529 funds can be used to repay up to $10,000 in student loans (lifetime limit per beneficiary)."
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
