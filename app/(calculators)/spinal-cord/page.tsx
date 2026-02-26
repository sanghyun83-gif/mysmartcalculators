import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "spinal-cord";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: meta?.title,
  description: meta?.description,
  alternates: {
    canonical: meta?.canonical,
  }
};

const HubClient = dynamic(
  () => import("./HubClient"),
  {
    ssr: true,
    loading: () => <div className="min-h-screen bg-slate-950" />
  }
);

export default function CalcSpinalcordPage() {
  return (
    <>
      <HubClient />

      {/* Technical SEO: SoftwareApplication & FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Spinal Cord Injury (SCI) Auditor v2.1",
              "operatingSystem": "All",
              "applicationCategory": "LegalApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is a Spinal Cord Injury settlement worth in 2026?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Average settlements for complete quadriplegia (C1-C4) often exceed $5M - $10M, while incomplete paraplegia ranges from $500,000 to $3M. These values depend on ASIA scale ratings and 2026 Life Care Plan (LCP) actuarial data."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does the ASIA impairment grade affect my SCI payout?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. ASIA Grade A (Complete) triggers the highest non-economic damage multipliers. Grades B, C, and D represent varying levels of incomplete sensory and motor function, each with specific impact on future medical maintenance costs."
                  }
                }
              ]
            }
          ])
        }}
      />
    </>
  );
}

