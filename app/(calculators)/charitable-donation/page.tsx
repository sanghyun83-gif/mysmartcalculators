import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "charitable-donation";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: "2026 Charitable Donation Calculator | Institutional Tax Auditor",
  description: "Calculate 2026 charitable donation tax deductions using AGI limits, marginal tax brackets, and QCD benchmarks. Forensic itemized deduction audit.",
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

export default function CalcCharitabledonationPage() {
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
                "name": "2026 Donation Compliance Auditor",
                "operatingSystem": "All",
                "applicationCategory": "FinanceApplication",
                "description": "Professional tool for auditing charitable donation deductions using 2026 IRS AGI and QCD compliance benchmarks.",
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
                    "name": "How much of my charitable donations can I deduct in 2026?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "In 2026, you can generally deduct up to 60% of your AGI for cash donations to public charities. Asset-based giving is capped at 30% of AGI, with a 5-year carryforward rule for excess contributions."
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
