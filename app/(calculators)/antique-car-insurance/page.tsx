import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "antique-car-insurance";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: "2026 Antique Car Insurance Calculator | Official S-Class Valuation Auditor",
  description: "Calculate antique car insurance premiums with 2026 precision. Official S-Class auditor for pre-1948 vehicles, vintage cars, and agreed-value coverage.",
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

export default function CalcAntiqueCarInsurancePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "2026 Antique Car Insurance Calculator",
        "operatingSystem": "All",
        "applicationCategory": "UtilitiesApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "HowTo",
        "name": "How to Calculate Antique Car Insurance Premiums",
        "step": [
          {
            "@type": "HowToStep",
            "text": "Select the vehicle era (e.g., Brass Era, Vintage, Pre-War, or Post-War Classic)."
          },
          {
            "@type": "HowToStep",
            "text": "Choose your coverage level (Agreed Value, Stated Value, or Spare Parts)."
          },
          {
            "@type": "HowToStep",
            "text": "Input estimated vehicle mileage and current market valuation."
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
            "name": "How much does it cost to insure an antique car in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In 2026, antique car insurance typically costs between $200 and $600 per year, depending on the agreed value and limited mileage requirements."
            }
          },
          {
            "@type": "Question",
            "name": "What qualifies as an antique car for insurance purposes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Generally, vehicles 25 years or older qualify as antiques. They must be maintained in original condition and used primarily for exhibitions or shows rather than daily transportation."
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

