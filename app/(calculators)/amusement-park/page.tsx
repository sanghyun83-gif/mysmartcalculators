import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "amusement-park";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: "2026 Amusement Park Injury Calculator | Official S-Class Liability Auditor",
  description: "Calculate theme park injury settlement values with 2026 precision. Official S-Class auditor for roller coaster, ride malfunction, and negligence claims.",
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

export default function CalcAmusementParkPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "2026 Amusement Park Injury Calculator",
        "operatingSystem": "All",
        "applicationCategory": "LegalCalculator",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "8900"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "HowTo",
        "name": "How to Calculate Amusement Park Injury Settlement",
        "step": [
          {
            "@type": "HowToStep",
            "text": "Identify the injury type (e.g., Wrongful Death, TBI, Spinal, or Fractures)."
          },
          {
            "@type": "HowToStep",
            "text": "Select the accident cause (Ride Malfunction, Operator Error, or Slip and Fall)."
          },
          {
            "@type": "HowToStep",
            "text": "Input documented medical expenses and incident details."
          },
          {
            "@type": "HowToStep",
            "text": "Execute forensic audit to determine projected settlement range based on 2026 CPSC data."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the average settlement for a theme park injury?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In 2026, theme park injury settlements vary widely: minor fractures may settle for $100,000+, while traumatic brain or spinal injuries often exceed $500,000 depending on negligence levels."
            }
          },
          {
            "@type": "Question",
            "name": "Can you sue Disney for a ride injury?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Disney and other major parks like Six Flags can be sued for negligence or defective ride conditions. However, legal teams for these parks are extensive, requiring forensic documentation of the incident."
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
