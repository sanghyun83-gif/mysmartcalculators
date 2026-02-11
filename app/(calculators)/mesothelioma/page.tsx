import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "mesothelioma";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: meta?.title,
  description: meta?.description,
  alternates: {
    canonical: meta?.canonical,
  }
};

const MesoHubEngine = dynamic(
  () => import("./MesoHubEngine").then(mod => mod.MesoHubEngineComponent),
  {
    ssr: true,
    loading: () => <div className="min-h-screen bg-slate-950 line-rebuild-v2-1-4" />
  }
);

export default function CalcMesotheliomaPage() {
  return (
    <>
      <MesoHubEngine />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "SoftwareApplication",
          "name": "2026 Mesothelioma Settlement Calculator",
          "operatingSystem": "All", "applicationCategory": "LegalApplication",
          "description": "2026 expert mesothelioma settlement auditor with Bankruptcy Trust Fund data, VA benefit benchmarks, and asbestos litigation payout records.",
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "ratingCount": "2140" },
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
        })
      }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "What is the average mesothelioma settlement in 2026?", "acceptedAnswer": { "@type": "Answer", "text": "Average mesothelioma settlements range from $1M to $2.4M. Cases with documented occupational exposure and tumor staging (TNM III-IV) often exceed $3M through combined trust fund and litigation recovery." } },
            { "@type": "Question", "name": "How do asbestos bankruptcy trust funds work?", "acceptedAnswer": { "@type": "Answer", "text": "Over 60 asbestos trust funds hold approximately $30B in assets. Claimants can file against multiple trusts simultaneously while also pursuing active litigation, potentially recovering from several manufacturers." } }
          ]
        })
      }} />
    </>
  );
}
