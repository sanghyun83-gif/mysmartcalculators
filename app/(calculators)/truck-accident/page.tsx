import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "truck-accident";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: meta?.title,
  description: meta?.description,
  alternates: {
    canonical: meta?.canonical,
  }
};

const HubClient = dynamic(
  () => import("./HubClientFixed"),
  {
    ssr: true,
    loading: () => <div className="min-h-screen bg-slate-950" />
  }
);

export default function CalcTruckaccidentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Truck Accident Settlement Calculator",
    "operatingSystem": "All",
    "applicationCategory": "FinancialValueCalculator",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1204"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the average settlement for a truck accident?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Average truck accident settlements range from $100,000 to over $1,500,000, depending on injury severity, FMCSA violations, and jurisdiction code."
        }
      },
      {
        "@type": "Question",
        "name": "How does the Multiplier Method work for trucking injuries?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Multiplier Method calculates non-economic damages by multiplying medical bills by a factor (typically 1.5x to 5.0x) based on injury severity and commercial liability factors."
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <HubClient />
    </>
  );
}
