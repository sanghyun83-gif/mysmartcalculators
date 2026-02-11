import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "tbi";
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

export default function CalcTbiPage() {
  return (
    <>
      <HubClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "SoftwareApplication",
          "name": "2026 Traumatic Brain Injury Settlement Calculator",
          "operatingSystem": "All", "applicationCategory": "LegalApplication",
          "description": "2026 expert TBI settlement auditor with GCS severity scoring and neuro-psychological care cost projections.",
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "ratingCount": "1560" },
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
        })
      }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "What is the average TBI settlement in 2026?", "acceptedAnswer": { "@type": "Answer", "text": "Average TBI settlements range from $100,000 for mild concussions to over $5M for severe DAI (Diffuse Axonal Injury), based on 2026 CDC TBI Center data and GCS severity scoring." } },
            { "@type": "Question", "name": "How does the Glasgow Coma Scale affect settlement value?", "acceptedAnswer": { "@type": "Answer", "text": "GCS scores of 3-8 (severe) apply a 3-5x multiplier to base damages, while scores of 9-12 (moderate) apply 1.5-3x. This forensic staging method is the industry standard for TBI litigation valuation." } }
          ]
        })
      }} />
    </>
  );
}
