import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "casino-injury";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: "2026 Casino Injury Settlement Calculator | Forensic Gaming Auditor",
  description: "Calculate casino injury lawsuit settlement values using 2026 Las Vegas and Atlantic City benchmarks, Dram Shop liability factors, and gaming audit standards.",
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

export default function CalcCasinoinjuryPage() {
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
                "name": "2026 Casino Claim Auditor",
                "operatingSystem": "All",
                "applicationCategory": "LegalApplication",
                "description": "Professional tool for auditing casino injury settlement values using 2026 gaming commission and Dram Shop benchmarks.",
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
                    "name": "What is the average casino injury settlement in 2026?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Average settlements in 2026 range from $15,000 for minor falls to over $4.5M for catastrophic brain injuries or negligent security assaults on gaming floors."
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
