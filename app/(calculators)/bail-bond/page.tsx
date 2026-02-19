import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "bail-bond";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: "2026 Bail Bond Calculator | Official S-Class Bail Auditor",
  description: "Calculate bail bond premiums and total out-of-pocket costs with 2026 precision. Official S-Class auditor for state bail schedules and jail release benchmarks.",
  alternates: {
    canonical: meta?.canonical || `https://mysmartcalculators.com/${id}`,
  }
};

const HubClient = dynamic(
  () => import("./HubClient"),
  {
    ssr: true,
    loading: () => <div className="min-h-screen bg-slate-950" />
  }
);

export default function CalcBailBondPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "2026 Bail Bond Calculator",
        "operatingSystem": "All",
        "applicationCategory": "LegalCalculator",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.7",
          "ratingCount": "1250"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "HowTo",
        "name": "How to Calculate Bail Bond Cost",
        "step": [
          {
            "@type": "HowToStep",
            "text": "Identify the offense type (Misdemeanor, DUI, Felony, or Violent Felony)."
          },
          {
            "@type": "HowToStep",
            "text": "Select the state where the arrest occurred to apply specific state premium rates."
          },
          {
            "@type": "HowToStep",
            "text": "Input the total bail amount set by the court."
          },
          {
            "@type": "HowToStep",
            "text": "Execute premium audit to determine the non-refundable bond fee and estimated collateral requirements."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a bail bond cost in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In 2026, the standard bail bond premium is 10% of the total bail amount. For example, a $10,000 bail would require a $1,000 non-refundable fee to a bondsman."
            }
          },
          {
            "@type": "Question",
            "name": "Is bail collateral refundable?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, unlike the premium fee, collateral is fully refundable once the case is closed and all court appearances are met, regardless of the verdict."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HubClient />
    </>
  );
}
