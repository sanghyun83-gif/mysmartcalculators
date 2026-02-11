import { getCalculatorMeta } from "@/lib/registry/calculators";
import React, { lazy, Suspense } from "react";
import { ClientOnly } from "@/components/ClientOnly";

const id = "construction-accident";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: meta?.title,
  description: meta?.description,
  alternates: {
    canonical: meta?.canonical,
  }
};

import HubClient from "./HubClient";

export default function CalcConstructionaccidentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "SoftwareApplication",
          "name": "2026 Construction Accident Settlement Calculator",
          "operatingSystem": "All", "applicationCategory": "LegalApplication",
          "description": "2026 expert construction injury settlement auditor with OSHA Fatal Four data, BLS injury rates, and workers' comp integration.",
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "ratingCount": "1340" },
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
        })
      }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "What is the average construction accident settlement in 2026?", "acceptedAnswer": { "@type": "Answer", "text": "Average construction accident settlements range from $150,000 for minor injuries to over $2M for catastrophic falls or crush injuries. OSHA Fatal Four violations (falls, struck-by, electrocution, caught-in) apply a 2-4x negligence multiplier." } },
            { "@type": "Question", "name": "How do OSHA violations affect settlement value?", "acceptedAnswer": { "@type": "Answer", "text": "Documented OSHA violations significantly increase settlement value by establishing per se negligence. Willful violations carry fines up to $161,323 per occurrence and create strong evidence for punitive damages." } }
          ]
        })
      }} />
      <ClientOnly fallback={<div className="min-h-screen bg-slate-950" />}>
        <HubClient />
      </ClientOnly>
    </>
  );
}
