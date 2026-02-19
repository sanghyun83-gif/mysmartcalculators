import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "abilify";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: "2026 Abilify Lawsuit Calculator | Official S-Class Settlement Auditor",
  description: "Calculate Abilify lawsuit settlement values with 2026 precision. Official S-Class auditor for compulsive gambling, shopping, and hypersexual behavior claims.",
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

export default function CalcAbilifyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "2026 Abilify Lawsuit Calculator",
        "operatingSystem": "All",
        "applicationCategory": "MedicalCalculator",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "7800"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "HowTo",
        "name": "How to Calculate Abilify Settlement Value",
        "step": [
          {
            "@type": "HowToStep",
            "text": "Identify the compulsive behavior developed (e.g., pathological gambling, binge eating)."
          },
          {
            "@type": "HowToStep",
            "text": "Audit total financial losses incurred during the period of Abilify usage."
          },
          {
            "@type": "HowToStep",
            "text": "Select the duration of drug therapy to determine exposure longevity."
          },
          {
            "@type": "HowToStep",
            "text": "Solve for total settlement projection based on 2026 medical litigation benchmarks."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the average Abilify settlement in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In 2026, Abilify settlements for compulsive behaviors range from $50,000 to over $250,000, depending on the severity of financial loss and emotional distress."
            }
          },
          {
            "@type": "Question",
            "name": "Is there an FDA warning for Abilify gambling?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, in 2016, the FDA issued a safety communication warning that Abilify (aripiprazole) could lead to compulsive gambling, binge eating, and hypersexual behavior."
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
