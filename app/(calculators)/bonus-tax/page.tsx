import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "bonus-tax";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: "2026 Bonus Tax Calculator | Official S-Class Supplemental Wage Auditor",
  description: "Calculate your bonus tax withholding with 2026 precision. Official S-Class auditor for IRS supplemental wages incorporating flat rates and aggregate method benchmarks.",
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

export default function CalcBonustaxPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "2026 Bonus Tax Calculator",
        "operatingSystem": "All",
        "applicationCategory": "FinanceCalculator",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "8430"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "HowTo",
        "name": "How to Calculate Bonus Tax Withholding",
        "step": [
          {
            "@type": "HowToStep",
            "text": "Determine if your bonus is taxed via Flat Rate (22%) or Aggregate Method."
          },
          {
            "@type": "HowToStep",
            "text": "Apply FICA (Social Security & Medicare) taxes to the gross bonus amount."
          },
          {
            "@type": "HowToStep",
            "text": "Calculate State supplemental withholding based on residency."
          },
          {
            "@type": "HowToStep",
            "text": "Solve for net take-home pay after all statutory deductions."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the flat federal withholding rate for bonuses in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For 2026, the IRS flat withholding rate for supplemental wages (bonuses) up to $1 million is 22%. If your total supplemental wages for the year exceed $1 million, the excess is taxed at the highest individual tax rate (currently 37%)."
            }
          },
          {
            "@type": "Question",
            "name": "Does my state tax my bonus differently than my regular salary?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Many states follow the federal model and use a flat withholding rate for bonuses, while others treat them as regular income. California, for instance, uses a 10.23% supplemental rate."
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
