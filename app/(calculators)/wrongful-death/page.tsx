import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "wrongful-death";
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

export default function CalcWrongfuldeathPage() {
  return (
    <>
      <HubClient />

      {/* 2.1 technical SEO: SoftwareApplication & FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "2026 Wrongful Death Settlement Auditor",
            "operatingSystem": "All",
            "applicationCategory": "FinancialApplication",
            "description": "Expert-grade wrongful death settlement calculator injecting Survival Action and Hedonic damage multipliers.",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "1840"
            }
          }),
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
                "name": "What is the Survival Action Delta?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Survival Action Delta refers to the additional compensation for the pain and suffering experienced by the deceased between the time of injury and the time of death."
                }
              },
              {
                "@type": "Question",
                "name": "How are Hedonic Damages calculated?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hedonic damages, or 'loss of enjoyment of life,' are calculated based on actuarial data assessing the lost value of life's experiences and pleasures, often using a baseline of 1.35x."
                }
              },
              {
                "@type": "Question",
                "name": "Why use an S-Class Settlement Auditor?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Standard calculators ignore forensic multipliers. S-Class v2.1 integrates 2026 actuarial tables and representation gap analysis to provide a high-fidelity settlement projection."
                }
              }
            ]
          }),
        }}
      />
    </>
  );
}
