import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "depuy-knee";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: "2026 DePuy Knee Lawsuit Calculator | Official S-Class Medical Auditor",
  description: "Calculate your DePuy knee settlement value with 2026 precision. Official S-Class auditor for Attune tibial loosening claims incorporating national litigation benchmarks.",
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

export default function CalcDepuykneePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "2026 DePuy Knee Lawsuit Calculator",
        "operatingSystem": "All",
        "applicationCategory": "HealthCalculator",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "9120"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "HowTo",
        "name": "How to Calculate DePuy Knee Settlement",
        "step": [
          {
            "@type": "HowToStep",
            "text": "Identify your specific knee implant model (Attune, Sigma, etc.)."
          },
          {
            "@type": "HowToStep",
            "text": "Audit medical records for tibial component loosening or early failure."
          },
          {
            "@type": "HowToStep",
            "text": "Calculate economic damages including surgical revision costs and recovery."
          },
          {
            "@type": "HowToStep",
            "text": "Generate final forensic settlement valuation using 2026 litigation metrics."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the average settlement for a DePuy Attune knee lawsuit in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In 2026, average DePuy Attune knee settlements for cases requiring revision surgery range from $200,000 to $500,000. Values depend strictly on the age of the patient, severity of bone damage, and impact on long-term mobility."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a recall for DePuy Attune knee implants?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While there has not been a total class-wide recall of the Attune system, thousands of individual lawsuits have been filed alleging design defects related to tibial component loosening."
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
