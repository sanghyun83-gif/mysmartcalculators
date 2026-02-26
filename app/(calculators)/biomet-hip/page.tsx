import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "biomet-hip";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: "2026 Biomet Hip Lawsuit Calculator | Official S-Class M/L Taper Auditor",
  description: "Calculate Biomet hip lawsuit settlement values with 2026 precision. Official S-Class auditor for M/L Taper, Magnum, and revision surgery claims.",
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

export default function CalcBiometHipPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "2026 Biomet Hip Settlement Calculator",
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
        "name": "How to Calculate Biomet Hip Settlement",
        "step": [
          {
            "@type": "HowToStep",
            "text": "Identify the Biomet product (M/L Taper, Magnum, or Taperloc)."
          },
          {
            "@type": "HowToStep",
            "text": "Determine if revision surgery was required or if metallosis was diagnosed."
          },
          {
            "@type": "HowToStep",
            "text": "Input medical expenses and years since the initial implantation."
          },
          {
            "@type": "HowToStep",
            "text": "Apply the S-Class v2.6 forensic audit to determine the projected settlement range."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the average settlement for Biomet hip lawsuits?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Average settlements for Biomet hip revision cases in 2026 range from $200,000 to over $400,000, depending on the severity of tissue damage and the number of revision surgeries."
            }
          },
          {
            "@type": "Question",
            "name": "Which Biomet hips are being sued?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The primary products involved in current litigation are the Zimmer Biomet M/L Taper hip stem and the M2a Magnum hip system, specifically due to taper junction corrosion."
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

