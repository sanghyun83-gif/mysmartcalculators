import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "boating-accident";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: "2026 Boating Accident Settlement Calculator | Institutional Claim Auditor",
  description: "Evaluate boating accident lawsuit settlement values based on 2026 maritime law, injury severity tiers, and jurisdictional risk indices. Forensic claim audit.",
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

export default function CalcBoatingaccidentPage() {
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
                "name": "2026 Maritime Claim Auditor",
                "operatingSystem": "All",
                "applicationCategory": "LegalApplication",
                "description": "Professional tool for auditing boating accident settlement values using 2026 maritime injury benchmarks.",
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
                    "name": "What is the average boating accident settlement in 2026?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "2026 settlement benchmarks range from $45,000 for minor injuries to over $5,000,000 for catastrophic maritime wrongful death claims."
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
