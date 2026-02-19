import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "burn-injury";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: "2026 Burn Injury Settlement Calculator | Institutional Claim Auditor",
  description: "Calculate burn injury lawsuit settlement values using 2026 ABA benchmarks, TBSA percentages, and disfigurement multipliers. Forensic claim audit.",
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

export default function CalcBurninjuryPage() {
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
                "name": "2026 Burn Claim Auditor",
                "operatingSystem": "All",
                "applicationCategory": "HealthApplication",
                "description": "Professional tool for auditing burn injury settlement values using 2026 ABA and forensic disfigurement benchmarks.",
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
                    "name": "What is the average burn injury settlement in 2026?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "2026 settlement benchmarks range from $10,000 for superficial burns to over $5,000,000 for critical 4th-degree burns with high TBSA and permanent disfigurement."
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
