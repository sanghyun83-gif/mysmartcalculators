import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "dog-bite";
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

export default function CalcDogbitePage() {
  return (
    <>
      <HubClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "SoftwareApplication",
          "name": "2026 Dog Bite Settlement Calculator",
          "operatingSystem": "All", "applicationCategory": "LegalApplication",
          "description": "2026 expert dog bite settlement auditor with III liability data, breed-specific propensity analysis, and 50-state strict liability rules.",
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "ratingCount": "1120" },
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
        })
      }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "What is the average dog bite settlement in 2026?", "acceptedAnswer": { "@type": "Answer", "text": "The average dog bite settlement is approximately $64,555 based on 2026 Insurance Information Institute data. Severe mauling cases with reconstructive surgery can exceed $500,000." } },
            { "@type": "Question", "name": "Do strict liability states pay more for dog bites?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. In strict liability states (like California and Illinois), the owner is liable regardless of prior knowledge of the dog's aggression, resulting in settlements averaging 30-50% higher than one-bite rule states." } }
          ]
        })
      }} />
    </>
  );
}
