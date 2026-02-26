import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";
import Script from "next/script";

const id = "talcum-powder";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: "Talcum Powder Settlement Calculator 2026 | Ovarian Cancer Auditor",
  description: "Calculate your 2026 Talcum Powder lawsuit settlement value. Expert MDL 2738 audit engine for ovarian cancer & mesothelioma, including J&J bankruptcy opt-out premiums.",
  alternates: {
    canonical: meta?.canonical || "https://mysmartcalculators.com/talcum-powder",
  },
  openGraph: {
    title: "Talcum Powder Settlement Calculator 2026 | MDL 2738 Audit",
    description: "Launch the 2026 Talc precision auditor to calculate your ovarian cancer settlement range instantly.",
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

export default function CalcTalcumpowderPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Talcum Powder Settlement Auditor 2026",
    "applicationCategory": "LegalApplication",
    "operatingSystem": "Any",
    "description": "2026 expert actuarial calculator for Talc MDL 2738 ovarian cancer litigation.",
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
        "name": "What is the average talcum powder settlement in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Average talcum powder settlements for ovarian cancer range from $75,000 to $150,000, while mesothelioma awards often exceed $1 million due to higher mortality weights."
        }
      },
      {
        "@type": "Question",
        "name": "How does the J&J bankruptcy rejection affect my claim?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 2025/2026 rejection of J&J's Chapter 11 filings allows claimants to pursue full jury trials instead of being forced into restricted settlement funds, creating a 1.5x trial premium."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="talc-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="talc-faqld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <HubClient />
    </>
  );
}
