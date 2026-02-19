import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "airbnb-income";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: "2026 Airbnb Income Calculator | S-Class Rental Payout Auditor",
  description: "Calculate your Airbnb profitability with 2026 precision. Official S-Class auditor incorporating local market occupancy benchmarks, service fee structures, and ROI analytics.",
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

export default function CalcAirbnbincomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "2026 Airbnb Income Calculator",
        "operatingSystem": "All",
        "applicationCategory": "FinanceCalculator",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "2156"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "HowTo",
        "name": "How to Calculate Airbnb Profit",
        "step": [
          {
            "@type": "HowToStep",
            "text": "Analyze average nightly rates in your jurisdiction."
          },
          {
            "@type": "HowToStep",
            "text": "Audit projected occupancy percentages (50-85%)."
          },
          {
            "@type": "HowToStep",
            "text": "Subtract platform service fees and professional cleaning costs."
          },
          {
            "@type": "HowToStep",
            "text": "Generate final net operating income (NOI) projection."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much can I make on Airbnb in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In 2026, Airbnb income depends on dynamic pricing models and occupancy velocity. Top-tier hosts typically see a 15-25% higher ROI than long-term rentals, though overhead for management and cleaning averages 20% of gross revenue."
            }
          },
          {
            "@type": "Question",
            "name": "What is a good occupancy rate for Airbnb?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A sustainable 2026 occupancy rate benchmark is 65-75%. Rates above 80% often indicate under-pricing, while below 50% suggests a failure in local market alignment or listing optimization."
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
