import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "boat-insurance";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: "2026 Boat Insurance Calculator | Comprehensive State-by-State Estimator",
  description: "Calculate boat insurance premiums and coverage limits based on 2026 statutory caps and maritime actuarial data. Instant Hull & Liability audit.",
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

export default function CalcBoatinsurancePage() {
  return (
    <>
      <HubClient />

      {/* Schema.org Implementation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "SoftwareApplication",
                "name": "2026 Boat Insurance Audit Engine",
                "operatingSystem": "All",
                "applicationCategory": "FinanceApplication",
                "description": "Calculate boat insurance premiums based on 2026 maritime insurance benchmarks and state-level indices.",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD"
                }
              },
              {
                "@type": "HowTo",
                "name": "How to Calculate Boat Insurance Costs",
                "step": [
                  {
                    "@type": "HowToStep",
                    "text": "Select your boat type and displacement category."
                  },
                  {
                    "@type": "HowToStep",
                    "text": "Provide the current market or agreed hull value."
                  },
                  {
                    "@type": "HowToStep",
                    "text": "Apply state-level risk factors (e.g., Florida Hurricane Zone)."
                  },
                  {
                    "@type": "HowToStep",
                    "text": "Configure liability limits and safety course discounts."
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How much is boat insurance in 2026?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Average premiums range from $300 for small watercraft to over $2,500 for yachts, heavily influenced by 2026 maritime inflation and regional storm risk."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />
    </>
  );
}
