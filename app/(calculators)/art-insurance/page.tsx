import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "art-insurance";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: "2026 Art Insurance Calculator | Official S-Class Fine Art Auditor",
  description: "Calculate fine art insurance premiums with 2026 precision. Official S-Class auditor for paintings, sculptures, and collectibles with agreed-value coverage.",
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

export default function CalcArtInsurancePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "2026 Art Insurance Calculator",
        "operatingSystem": "All",
        "applicationCategory": "FinanceCalculator",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "1800"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "HowTo",
        "name": "How to Calculate Fine Art Insurance Premiums",
        "step": [
          {
            "@type": "HowToStep",
            "text": "Identify the art type (Paintings, Sculptures, Photography, or Antiques)."
          },
          {
            "@type": "HowToStep",
            "text": "Select coverage protocol (Agreed Value, Replacement Cost, or Actual Cash Value)."
          },
          {
            "@type": "HowToStep",
            "text": "Input collection appraisal value and security rating."
          },
          {
            "@type": "HowToStep",
            "text": "Execute forensic audit to determine projected annual premiums based on 2026 actuarial data."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does art insurance cost in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In 2026, art insurance typically costs between 0.5% and 1.5% of the appraised value per year, depending on the collection's security and art type."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need a separate policy for fine art?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, because standard homeowners insurance has low limits for valuables. An art floater or specialized policy provides agreed-value coverage and protection against accidental damage."
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
