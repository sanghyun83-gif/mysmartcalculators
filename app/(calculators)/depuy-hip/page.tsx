import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "depuy-hip";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: "2026 DePuy Hip Lawsuit Calculator | Official S-Class Medical Auditor",
  description: "Calculate your DePuy hip settlement value with 2026 precision. Official S-Class auditor for ASR and Pinnacle metallosis claims incorporating national MDL 2244 benchmarks.",
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

export default function CalcDepuyhipPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "2026 DePuy Hip Lawsuit Calculator",
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
        "name": "How to Calculate DePuy Hip Settlement",
        "step": [
          {
            "@type": "HowToStep",
            "text": "Identify your specific hip implant model (ASR, Pinnacle, etc.)."
          },
          {
            "@type": "HowToStep",
            "text": "Audit medical records for revision surgery markers or metallosis diagnosis."
          },
          {
            "@type": "HowToStep",
            "text": "Calculate economic damages including future medical care and lost wages."
          },
          {
            "@type": "HowToStep",
            "text": "Generate final forensic settlement valuation using MDL 2244 benchmarks."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the average settlement for a DePuy hip lawsuit in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In 2026, average DePuy hip settlements typically range from $250,000 to $450,000 for cases involving revision surgery. Extreme cases involving permanent disability or multiple surgeries can result in significantly higher compensation."
            }
          },
          {
            "@type": "Question",
            "name": "Is the DePuy hip lawsuit still ongoing in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. While billions have already been paid, new claims continue to be filed and litigated in 2026 for both recalled ASR models and metal-on-metal Pinnacle implants."
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

