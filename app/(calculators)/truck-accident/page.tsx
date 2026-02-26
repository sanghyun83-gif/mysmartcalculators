import { getCalculatorMeta } from "@/lib/registry/calculators";
import React, { lazy, Suspense } from "react";
import { ClientOnly } from "@/components/ClientOnly";

const id = "truck-accident";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: meta?.title,
  description: meta?.description,
  alternates: {
    canonical: meta?.canonical,
  }
};

import HubClient from "./HubClient";

export default function CalcTruckaccidentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "2026 Truck Accident Settlement Calculator",
    "operatingSystem": "All",
    "applicationCategory": "LegalApplication",
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
        "name": "What is the average truck accident settlement in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Average 2026 truck accident settlements range from $100,000 to over $1,500,000, depending on injury severity, FMCSA violations, and jurisdiction code."
        }
      },
      {
        "@type": "Question",
        "name": "How does the Multiplier Method work for trucking injuries?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Multiplier Method calculates non-economic damages by multiplying medical bills by a factor (typically 1.5x to 5.0x) based on injury severity and commercial liability factors."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <ClientOnly fallback={<div className="min-h-screen bg-[#020617]" />}>
        <HubClient />
      </ClientOnly>
    </>
  );
}

