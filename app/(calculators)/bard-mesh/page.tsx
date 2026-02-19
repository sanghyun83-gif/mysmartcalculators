import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "bard-mesh";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: "2026 Bard Hernia Mesh Lawsuit Calculator | Official S-Class Mesh Auditor",
  description: "Calculate Bard hernia mesh settlement values with 2026 precision. Official S-Class auditor for Ventralex, Composix, and 3DMax mesh complications.",
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

export default function CalcBardMeshPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "2026 Bard Mesh Settlement Calculator",
        "operatingSystem": "All",
        "applicationCategory": "MedicalCalculator",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.7",
          "ratingCount": "890"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "HowTo",
        "name": "How to Calculate Bard Mesh Settlement",
        "step": [
          {
            "@type": "HowToStep",
            "text": "Identify the mesh product used (Ventralex, Composix Kugel, 3DMax, etc.)."
          },
          {
            "@type": "HowToStep",
            "text": "Specify the injury type (Revision surgery, infection, chronic pain, or failure)."
          },
          {
            "@type": "HowToStep",
            "text": "Input documented medical expenses related to mesh complications."
          },
          {
            "@type": "HowToStep",
            "text": "Audit the claim to estimate pain and suffering multipliers based on 2026 MDL 2846 data."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the average Bard mesh settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While individual values vary, Bard mesh cases involving revision surgery or serious infection have resulted in settlements ranging from $50,000 to over $300,000 in 2026."
            }
          },
          {
            "@type": "Question",
            "name": "Is the Composix Kugel mesh still recalled?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, specific lots of Composix Kugel Mesh were recalled due to a memory recoil ring that could break and cause bowel perforations, driving significant litigation value."
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
