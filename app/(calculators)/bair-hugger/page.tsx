import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "bair-hugger";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: "2026 Bair Hugger Lawsuit Calculator | Official S-Class Infection Auditor",
  description: "Calculate surgical warming blanket infection settlement values with 2026 precision. Official S-Class auditor for 3M Bair Hugger hip and knee joint infection claims.",
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

export default function CalcBairHuggerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "2026 Bair Hugger Settlement Calculator",
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
        "name": "How to Calculate Bair Hugger Settlement",
        "step": [
          {
            "@type": "HowToStep",
            "text": "Identify the primary infection site (Hip Replacement, Knee Replacement, or Revision Surgery)."
          },
          {
            "@type": "HowToStep",
            "text": "Specify the surgery outcome (Multiple revisions, amputation, permanent disability, etc.)."
          },
          {
            "@type": "HowToStep",
            "text": "Input total medical expenses related to the infection treatment."
          },
          {
            "@type": "HowToStep",
            "text": "Audit the claim to estimate pain and suffering multipliers based on 2026 litigation data."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the average Bair Hugger settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While individual values vary, severe deep joint infection cases requiring multiple revision surgeries or resulting in amputation have projected settlement ranges between $300,000 and $500,000 based on 2026 litigation benchmarks."
            }
          },
          {
            "@type": "Question",
            "name": "Is the Bair Hugger lawsuit still active in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, while the federal MDL 2666 was dismissed, many cases remain active in state court jurisdictions across the U.S. for patients who suffered periprosthetic joint infections (PJI)."
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

