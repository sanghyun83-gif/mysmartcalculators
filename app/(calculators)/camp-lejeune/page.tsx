import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "camp-lejeune";
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

export default function CalcCamplejeunePage() {
  return (
    <>
      <HubClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "SoftwareApplication",
          "name": "2026 Camp Lejeune Settlement Calculator",
          "operatingSystem": "All", "applicationCategory": "LegalApplication",
          "description": "2026 expert Camp Lejeune toxic water settlement auditor with PACT Act (CLJA) guidelines, DOJ settlement benchmarks, and VA health data.",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
        })
      }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "What is the average Camp Lejeune settlement in 2026?", "acceptedAnswer": { "@type": "Answer", "text": "Based on DOJ CLJA Elective Options, Tier 1 claims (leukemia, bladder cancer) offer $450,000+, while Tier 2 claims (kidney cancer, liver cancer) range from $150,000-$400,000. Individual litigation may yield higher." } },
            { "@type": "Question", "name": "What is the PACT Act Camp Lejeune Justice Act?", "acceptedAnswer": { "@type": "Answer", "text": "The CLJA (Section 804 of the PACT Act) grants a federal cause of action for anyone exposed to contaminated water at Camp Lejeune for 30+ days between 1953-1987, overriding North Carolina's 10-year statute of repose." } }
          ]
        })
      }} />
    </>
  );
}

