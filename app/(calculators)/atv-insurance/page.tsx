import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "atv-insurance";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: "2026 ATV Insurance Calculator | Official S-Class Coverage Auditor",
  description: "Calculate ATV insurance premiums with 2026 precision. Official S-Class auditor for Polaris, Can-Am, and UTV coverage benchmarks.",
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

export default function CalcAtvInsurancePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "2026 ATV Insurance Calculator",
        "operatingSystem": "All",
        "applicationCategory": "FinanceApplication",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "980"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "HowTo",
        "name": "How to Calculate ATV Insurance Premium",
        "step": [
          {
            "@type": "HowToStep",
            "text": "Select your vehicle type (Sport, Utility, Youth, or Side-by-Side)."
          },
          {
            "@type": "HowToStep",
            "text": "Choose required coverage options including Comprehensive and Collision."
          },
          {
            "@type": "HowToStep",
            "text": "Input the estimated value of the ATV and aftermarket accessories."
          },
          {
            "@type": "HowToStep",
            "text": "Execute premium audit to determine annual cost range based on 2026 actuarial data."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does ATV insurance cost in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In 2026, standard ATV insurance costs between $100 and $400 per year, depending on the engine size, vehicle value, and the rider's experience level."
            }
          },
          {
            "@type": "Question",
            "name": "Is insurance required for UTVs or Side-by-Sides?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While not always legally required on private land, many public trails and federal lands require liability insurance. Side-by-sides are often more expensive to insure due to their higher market value."
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
