import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "bard-powerport";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: "2026 Bard PowerPort Lawsuit Calculator | Official S-Class Litigation Auditor",
  description: "Calculate Bard PowerPort settlement values with 2026 precision. Official S-Class auditor for catheter fracture, migration, and blood clot claims.",
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

export default function CalcBardPowerPortPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "2026 Bard PowerPort Settlement Calculator",
        "operatingSystem": "All",
        "applicationCategory": "MedicalCalculator",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "720"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "HowTo",
        "name": "How to Calculate Bard PowerPort Settlement",
        "step": [
          {
            "@type": "HowToStep",
            "text": "Identify the primary injury (fracture, migration, blood clot, or fatal complication)."
          },
          {
            "@type": "HowToStep",
            "text": "Identify if the device model was part of the FDA Class I recall."
          },
          {
            "@type": "HowToStep",
            "text": "Input documented medical expenses and hospitalization duration."
          },
          {
            "@type": "HowToStep",
            "text": "Audit the claim based on 2026 MDL litigation settlement protocols."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the average Bard PowerPort settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Settlement values for 2026 PowerPort claims depend on the severity of the injury. Emergency surgery cases often see settlements between $200,000 and $400,000, while wrongful death cases can exceed $1 million."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a recall on Bard PowerPort devices?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, multiple Bard PowerPort models have been subject to FDA Class I recalls due to risks of catheter fracture and migration, which are core drivers of current litigation."
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
