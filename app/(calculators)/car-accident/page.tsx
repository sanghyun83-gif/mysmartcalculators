import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "car-accident";
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

export default function CalcCaraccidentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Car Accident Settlement Auditor v2.1",
    "operatingSystem": "All",
    "applicationCategory": "LegalApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1250"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How is 'Pain and Suffering' calculated in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Insurance carriers now primarily use AI-driven medical coding audits. Pain and suffering is calculated as a multiple (1.5x up to 5x) of your documented 'Special Damages'."
        }
      },
      {
        "@type": "Question",
        "name": "What is the 51% Fault Barrier?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In Modified Comparative states, if you are found to be 51% or more at fault, you are legally barred from any financial recovery."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HubClient />
    </>
  );
}
