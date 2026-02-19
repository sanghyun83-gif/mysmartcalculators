import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "camper-insurance";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: "2026 Camper Insurance Calculator | Comprehensive Premium Auditor",
  description: "Calculate camper insurance premiums for truck campers, pop-ups, and teardrop trailers. Based on 2026 state indices and leisure vehicle actuarial data.",
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

export default function CalcCamperinsurancePage() {
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
                "name": "2026 Camper Insurance Audit Engine",
                "operatingSystem": "All",
                "applicationCategory": "FinanceApplication",
                "description": "Professional tool for auditing camper insurance premiums using 2026 regional risk and RVIA benchmarks.",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How much does camper insurance cost in 2026?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Average annual premiums range from $180 for teardrop trailers to $550+ for toy haulers, with state-level adjustments based on camping frequency and theft risk."
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
