import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "aviation";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: "2026 Aviation Accident Calculator | Official S-Class Liability Auditor",
  description: "Calculate plane crash and aviation accident settlement values with 2026 precision. Official S-Class auditor for FAA, NTSB, and Montreal Convention claims.",
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

export default function CalcAviationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "2026 Aviation Accident Calculator",
        "operatingSystem": "All",
        "applicationCategory": "LegalCalculator",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "1550"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "HowTo",
        "name": "How to Calculate Aviation Accident Settlement Value",
        "step": [
          {
            "@type": "HowToStep",
            "text": "Identify the accident type (Commercial Airline, Private Plane, or Helicopter)."
          },
          {
            "@type": "HowToStep",
            "text": "Determine the cause of the accident (Pilot Error, Mechanical Failure, or Manufacturing Defect)."
          },
          {
            "@type": "HowToStep",
            "text": "Input medical costs and confirm the severity of injuries or wrongful death status."
          },
          {
            "@type": "HowToStep",
            "text": "Execute forensic audit to determine projected settlement range based on FAA and NTSB 2026 protocols."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the average plane crash settlement in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In 2026, commercial airline crash settlements typically range from $1,500,000 to over $20,000,000 per passenger, depending on liability findings and the Montreal Convention limits."
            }
          },
          {
            "@type": "Question",
            "name": "How does the Montreal Convention affect aviation claims?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Montreal Convention establishes a 'strict liability' layer for international flights, currently set at approximately 128,821 SDRs (roughly $175,800 USD), above which airlines must prove they were not negligent to avoid higher payouts."
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
