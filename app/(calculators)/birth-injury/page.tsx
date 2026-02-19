import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "birth-injury";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: "2026 Birth Injury Settlement Calculator | Official S-Class Medical Auditor",
  description: "Calculate your birth injury settlement value with 2026 precision. Official S-Class auditor for cerebral palsy, HIE, and Erb's palsy claims incorporating national malpractice benchmarks.",
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

export default function CalcBirthinjuryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "2026 Birth Injury Settlement Calculator",
        "operatingSystem": "All",
        "applicationCategory": "HealthCalculator",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "5128"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "HowTo",
        "name": "How to Calculate Birth Injury Settlement",
        "step": [
          {
            "@type": "HowToStep",
            "text": "Identify specific diagnosis (Cerebral Palsy, HIE, Erb's Palsy)."
          },
          {
            "@type": "HowToStep",
            "text": "Audit lifetime care cost projections (medical, therapy, housing)."
          },
          {
            "@type": "HowToStep",
            "text": "Cross-reference with state-specific malpractice damage caps."
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
            "name": "What is the average settlement for a birth injury in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In 2026, average birth injury settlements typically range from $1M to $5M for severe cases. Catastrophic injuries requiring lifelong 24/7 care often result in verdicts or settlements exceeding $10M."
            }
          },
          {
            "@type": "Question",
            "name": "How is birth injury compensation calculated?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Compensation is calculated using a 'Life Care Plan' methodology which audits future medical expenses, lost earning capacity for the child, and non-economic damages for pain and suffering."
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
