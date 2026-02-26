import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "nursing-home";
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

export default function CalcNursinghomePage() {
  return (
    <>
      <HubClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "SoftwareApplication",
          "name": "2026 Nursing Home Abuse Settlement Calculator",
          "operatingSystem": "All", "applicationCategory": "LegalApplication",
          "description": "2026 expert nursing home abuse auditor with CMS Star Rating impact analysis and CDC elder abuse statistics.",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
        })
      }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "What is the average nursing home abuse settlement in 2026?", "acceptedAnswer": { "@type": "Answer", "text": "Average nursing home abuse settlements range from $250,000 for documented neglect to over $1.5M for wrongful death cases involving facilities with repeated CMS deficiency citations." } },
            { "@type": "Question", "name": "How do CMS Star Ratings affect settlement value?", "acceptedAnswer": { "@type": "Answer", "text": "Facilities rated 1-star by CMS (Medicare.gov) face a 1.5-2x negligence multiplier, as low ratings demonstrate a pattern of systemic failures that courts consider evidence of institutional neglect." } }
          ]
        })
      }} />
    </>
  );
}

