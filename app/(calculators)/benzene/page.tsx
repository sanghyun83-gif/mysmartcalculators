import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "benzene";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: "2026 Benzene Leukemia Settlement Calculator | Official S-Class Audit",
  description: "Calculate benzene leukemia settlement values with 2026 precision. Official S-Class auditor for AML, MDS, and occupational exposure claims.",
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

export default function CalcBenzenePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "2026 Benzene Settlement Calculator",
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
        "name": "How to Calculate Benzene Exposure Settlement",
        "step": [
          {
            "@type": "HowToStep",
            "text": "Identify the diagnosed condition (AML, CML, MDS, or Aplastic Anemia)."
          },
          {
            "@type": "HowToStep",
            "text": "Identify the primary source of occupational benzene exposure (e.g., Refinery, Steel Mill)."
          },
          {
            "@type": "HowToStep",
            "text": "Determine the total duration of exposure in years."
          },
          {
            "@type": "HowToStep",
            "text": "Apply the S-Class v2.6 audit logic to determine the projected settlement range."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the average settlement for benzene exposure?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The average settlement for benzene-related leukemia (AML) in 2026 typically range from $500,000 to over $2,000,000, depending on exposure history and medical expenses."
            }
          },
          {
            "@type": "Question",
            "name": "How long does a benzene exposure lawsuit take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Major benzene litigation settlements often resolve within 18-36 months, though complex occupational claims may take longer to reach final auditing."
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

