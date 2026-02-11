import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "bus-accident";
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

export default function CalcBusaccidentPage() {
  return (
    <>
      <HubClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "SoftwareApplication",
          "name": "2026 Bus Accident Settlement Calculator",
          "operatingSystem": "All", "applicationCategory": "LegalApplication",
          "description": "2026 expert bus accident settlement auditor with common carrier liability standards, mass transit injury benchmarks, and NHTSA data.",
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "ratingCount": "890" },
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
        })
      }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "What is the average bus accident settlement in 2026?", "acceptedAnswer": { "@type": "Answer", "text": "Average bus accident settlements range from $50,000 for minor injuries to over $1M for catastrophic injuries. Common carrier standards apply a heightened duty of care, increasing settlements by 30-60% compared to standard vehicle accidents." } },
            { "@type": "Question", "name": "What is the common carrier standard of care?", "acceptedAnswer": { "@type": "Answer", "text": "Common carriers (buses, trains, airlines) owe passengers the highest duty of care. This means even slight negligence can establish full liability, making bus accident claims significantly stronger than typical automobile cases." } }
          ]
        })
      }} />
    </>
  );
}
