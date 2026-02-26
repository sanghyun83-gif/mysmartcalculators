import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "afff";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: "2026 AFFF Lawsuit Calculator | Official S-Class PFAS Settlement Auditor",
  description: "Calculate AFFF lawsuit settlement values with 2026 precision. Official S-Class auditor for PFAS contamination, firefighter cancer, and water claims.",
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

export default function CalcAfffPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "2026 AFFF Lawsuit Calculator",
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
        "name": "How to Calculate AFFF Settlement Value",
        "step": [
          {
            "@type": "HowToStep",
            "text": "Identify the claim type (Personal Injury/Cancer, Water Contamination, or Property Damage)."
          },
          {
            "@type": "HowToStep",
            "text": "Select the exposure source (Firefighting, Military Base, Airport, or Industrial)."
          },
          {
            "@type": "HowToStep",
            "text": "Input medical expenses and duration of toxic exposure in years."
          },
          {
            "@type": "HowToStep",
            "text": "Execute forensic audit to determine projected settlement range based on 2026 MDL 2873 data."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the average AFFF settlement for cancer in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In 2026, AFFF personal injury settlements for PFAS-linked cancers typically range from $200,000 to over $500,000, depending on exposure longevity and cancer type."
            }
          },
          {
            "@type": "Question",
            "name": "Has 3M settled the AFFF lawsuits?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, 3M agreed to a $12.5+ billion settlement for public water systems. However, individual personal injury claims remain active and are being litigated in MDL 2873."
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

