import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "18-wheeler";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: "2026 18-Wheeler Accident Settlement Calculator | Official S-Class Auditor",
  description: "Calculate your 18-wheeler accident settlement value with 2026 precision. Official S-Class auditor incorporating FMCSA safety violation data and commercial insurance benchmarks.",
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

export default function Calc18wheelerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "2026 18-Wheeler Accident Settlement Calculator",
        "operatingSystem": "All",
        "applicationCategory": "LegalCalculator",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "1084"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "HowTo",
        "name": "How to Calculate 18-Wheeler Settlement",
        "step": [
          {
            "@type": "HowToStep",
            "text": "Identify medical expenses and lost wages."
          },
          {
            "@type": "HowToStep",
            "text": "Apply the FMCSA safety violation multiplier."
          },
          {
            "@type": "HowToStep",
            "text": "Audit commercial insurance limits and carrier assets."
          },
          {
            "@type": "HowToStep",
            "text": "Generate final forensic settlement estimate."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the average 18-wheeler settlement in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Average 18-wheeler settlements in 2026 typically range from $150,000 to over $2,000,000, significantly higher than standard auto accidents due to commercial policy layers and FMCSA liability multipliers."
            }
          },
          {
            "@type": "Question",
            "name": "How do FMCSA violations impact my settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Violations of FMCSA Part 395 (Hours of Service) or Part 396 (Inspection) can increase settlement multipliers by 1.5x to 3x, as they transition a case toward punitive damages."
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
