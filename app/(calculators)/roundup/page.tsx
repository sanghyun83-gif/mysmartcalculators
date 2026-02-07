import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";
import Script from "next/script";

const id = "roundup";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: "Roundup Settlement Calculator 2026 | Average Payout Auditor",
  description: "Calculate your 2026 Roundup lawsuit settlement value. Expert MDL 2741 audit engine for Non-Hodgkin Lymphoma payouts, including 2026 Supreme Court Durnell factors.",
  alternates: {
    canonical: meta?.canonical || "https://mysmartcalculators.com/roundup",
  },
  openGraph: {
    title: "Roundup Settlement Calculator 2026 | MDL 2741 Audit",
    description: "Launch the 2026 Roundup precision auditor to calculate your NHL settlement range instantly.",
    type: "website",
  }
};

const HubClient = dynamic(
  () => import("./HubClient"),
  {
    ssr: true,
    loading: () => <div className="min-h-screen bg-slate-950" />
  }
);

export default function CalcRoundupPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Roundup Settlement Auditor 2026",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Any",
    "description": "2026 expert actuarial calculator for Roundup MDL 2741 litigation.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the average Roundup settlement in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Average Roundup payouts for Non-Hodgkin Lymphoma range from $50,000 to $250,000, with Tier 1 surgical or high-grade cases exceeding $1 million."
        }
      },
      {
        "@type": "Question",
        "name": "How does the Supreme Court Durnell case affect my claim?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 2026 Durnell review explores federal preemption on 'Failure to Warn' claims, potentially shifting the evidentiary burden for thousands of active lawsuits."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="roundup-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="roundup-faqld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <HubClient />
    </>
  );
}
