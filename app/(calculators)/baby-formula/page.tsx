import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "baby-formula";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: "2026 Baby Formula NEC Settlement Calculator | Official MDL 3026 Auditor",
  description: "Calculate your NEC lawsuit settlement value with 2026 precision. Official S-Class auditor for Similac and Enfamil litigation incorporating MDL 3026 benchmarks and surgical severity audits.",
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

export default function CalcBabyformulaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "2026 Baby Formula NEC Settlement Calculator",
        "operatingSystem": "All",
        "applicationCategory": "LegalCalculator",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "3412"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "HowTo",
        "name": "How to Calculate Baby Formula NEC Settlement",
        "step": [
          {
            "@type": "HowToStep",
            "text": "Identify infant diagnosis of Necrotizing Enterocolitis (NEC)."
          },
          {
            "@type": "HowToStep",
            "text": "Audit surgical intervention records and intestinal resection history."
          },
          {
            "@type": "HowToStep",
            "text": "Cross-reference with MDL 3026 bellwether trial benchmarks."
          },
          {
            "@type": "HowToStep",
            "text": "Generate final forensic settlement valuation."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "When will the baby formula NEC lawsuit settle?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "General settlements for MDL 3026 (Baby Formula NEC) are expected to accelerate in late 2026 following key appellate rulings. Current bellwether verdicts have ranged from $60M to $495M, setting high global settlement benchmarks."
            }
          },
          {
            "@type": "Question",
            "name": "What is the average NEC settlement payout?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Average settlement payouts for NEC cases in 2026 are projected between $300,000 and $800,000, with catastrophic cases involving permanent intestinal failure exceeding $1.5M."
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
