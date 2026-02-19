import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "DUI";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: "2026 DUI Cost Calculator | Official S-Class Legal Settlement Auditor",
  description: "Calculate the true cost of a 2026 DUI conviction with precision. Official S-Class auditor for state fines, lawyer fees, and insurance increase benchmarks.",
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

export default function CalcDUIPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "2026 DUI Cost Calculator",
        "operatingSystem": "All",
        "applicationCategory": "LegalCalculator",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "12500"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "HowTo",
        "name": "How to Calculate DUI Costs",
        "step": [
          {
            "@type": "HowToStep",
            "text": "Select your state of arrest to audit jurisdiction-specific statutory fines."
          },
          {
            "@type": "HowToStep",
            "text": "Identify the offense count (1st, 2nd, or 3rd) and blood alcohol concentration (BAC)."
          },
          {
            "@type": "HowToStep",
            "text": "Audit secondary expenses including lawyer fees, IID installation, and SR-22 insurance."
          },
          {
            "@type": "HowToStep",
            "text": "Generate a forensic total cost projection over a 3-year term."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a DUI cost on average in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The total average cost of a first-offense DUI in 2026 ranges from $10,000 to $15,000, including fines, legal fees, and a 3-year insurance premium spike."
            }
          },
          {
            "@type": "Question",
            "name": "Does a DUI affect car insurance for 5 years?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While surcharge impacts vary by state and provider, a DUI typically remains on your insurance record for 3 to 10 years, requiring SR-22 certification in most cases."
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
