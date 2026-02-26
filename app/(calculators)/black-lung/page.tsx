import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "black-lung";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: "2026 Black Lung Settlement Calculator | Official S-Class Payout Auditor",
  description: "Calculate black lung settlement and federal benefits with 2026 precision. Official S-Class auditor for coal workers' pneumoconiosis and MSHA claims.",
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

export default function CalcBlackLungPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "2026 Black Lung Settlement Calculator",
        "operatingSystem": "All",
        "applicationCategory": "LegalApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "HowTo",
        "name": "How to Calculate Black Lung Settlement",
        "step": [
          {
            "@type": "HowToStep",
            "text": "Identify the stage of Coal Workers' Pneumoconiosis (Simple vs Complicated PMF)."
          },
          {
            "@type": "HowToStep",
            "text": "Assess respiratory failure severity (Mild, Moderate, Severe, or Total Disability)."
          },
          {
            "@type": "HowToStep",
            "text": "Determine the years of underground or surface coal mine exposure."
          },
          {
            "@type": "HowToStep",
            "text": "Apply the S-Class v2.6 forensic audit to determine the projected settlement plus federal benefits."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the average settlement for black lung disease?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Average settlements for complicated PMF black lung cases in 2026 range from $250,000 to over $750,000, in addition to monthly federal disability benefits."
            }
          },
          {
            "@type": "Question",
            "name": "How much are federal black lung benefits in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In 2026, the basic monthly federal benefit for a single coal miner is approximately $728.50, plus medical coverage for respiratory treatments."
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

