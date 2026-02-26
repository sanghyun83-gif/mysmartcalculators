import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "accutane";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: "2026 Accutane Lawsuit Calculator | Official S-Class Side Effects Auditor",
  description: "Calculate Accutane side effect settlement values with 2026 precision. Official S-Class auditor for IBD, Crohn's Disease, and Ulcerative Colitis claims.",
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

export default function CalcAccutanePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "2026 Accutane Lawsuit Calculator",
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
        "name": "How to Calculate Accutane Settlement Value",
        "step": [
          {
            "@type": "HowToStep",
            "text": "Identify the specific injury type (e.g., Crohn's Disease, Ulcerative Colitis)."
          },
          {
            "@type": "HowToStep",
            "text": "Input the duration of Accutane (isotretinoin) usage and the timing of diagnosis."
          },
          {
            "@type": "HowToStep",
            "text": "Audit medical expenses including surgical costs and ongoing treatment requirements."
          },
          {
            "@type": "HowToStep",
            "text": "Generate a forensic settlement projection based on 2026 medical liability benchmarks."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the average Accutane settlement for IBD?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In 2026, settlements for Accutane-linked IBD (Crohn's or UC) typically range from $300,000 to over $500,000, depending on surgery history and severity."
            }
          },
          {
            "@type": "Question",
            "name": "Can I still sue for Accutane side effects in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, litigation remains active. While brand-name Accutane was discontinued in 2009, discovery rules in many states allow claims for long-term side effects discovered later."
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

