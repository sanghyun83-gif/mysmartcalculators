import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "bone-graft";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: "2026 Bone Graft Settlement Calculator | Institutional Claim Auditor",
  description: "Evaluate medical bone graft lawsuit settlements based on 2026 FDA risk data, infection severity, and surgical nonunion benchmarks. Forensic claim audit.",
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

export default function CalcBonegraftPage() {
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
                "name": "2026 bone-graft Claim Auditor",
                "operatingSystem": "All",
                "applicationCategory": "HealthApplication",
                "description": "Professional tool for auditing bone graft failure settlement values using 2026 surgical and infection benchmarks.",
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
                    "name": "How much for a bone graft lawsuit in 2026?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Average settlements range from $50,000 for minor nonunion to over $1,200,000 for systemic infections caused by contaminated donor bank tissue."
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
