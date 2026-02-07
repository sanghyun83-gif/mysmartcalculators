import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "slip-and-fall";
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

export default function CalcSlipandfallPage() {
  return (
    <>
      <HubClient />

      {/* Technical SEO: SoftwareApplication & FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Ranking Predator Slip and Fall Settlement Calculator",
            "operatingSystem": "All",
            "applicationCategory": "LegalApplication",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "1280"
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How is a slip and fall settlement calculated?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Settlements are calculated by summing medical bills and lost wages, then applying a 'Pain and Suffering' multiplier (typically 1.5x to 5x) based on injury severity. Specialist multipliers like ANSI breach or Notice Quality can further increase the valuation."
                }
              },
              {
                "@type": "Question",
                "name": "What is constructive notice in premises liability?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Constructive notice exists when a hazard was present for a sufficient length of time that the property owner should have discovered it through reasonable inspection, even if they didn't have actual knowledge."
                }
              }
            ]
          })
        }}
      />
    </>
  );
}
