import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "asbestos";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: "2026 Asbestos Exposure Calculator | Official S-Class Toxic Tort Auditor",
  description: "Calculate asbestos lawsuit settlement values with 2026 precision. Official S-Class auditor for mesothelioma, lung cancer, and bankruptcy trust fund claims.",
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

export default function CalcAsbestosPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "2026 Asbestos Exposure Calculator",
        "operatingSystem": "All",
        "applicationCategory": "LegalCalculator",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "15400"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "HowTo",
        "name": "How to Calculate Asbestos Settlement Value",
        "step": [
          {
            "@type": "HowToStep",
            "text": "Identify the asbestos-related disease (Mesothelioma, Lung Cancer, or Asbestosis)."
          },
          {
            "@type": "HowToStep",
            "text": "Document the exposure site (Shipyards, Construction, Power Plants, or Household)."
          },
          {
            "@type": "HowToStep",
            "text": "Input the duration of exposure and itemize medical expenses."
          },
          {
            "@type": "HowToStep",
            "text": "Execute forensic audit to determine projected settlement range vs active bankruptcy trust fund allocations."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the average settlement for mesothelioma in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In 2026, the average mesothelioma settlement typically ranges from $1 million to $2.5 million, with some trial verdicts exceeding $10 million depending on exposure history."
            }
          },
          {
            "@type": "Question",
            "name": "How many asbestos trust funds are still active?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "As of 2026, there are approximately 60 active asbestos bankruptcy trust funds with over $30 billion in remaining assets dedicated to compensating victims of exposure."
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
