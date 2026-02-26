import { getCalculatorMeta } from "@/lib/registry/calculators";
import { TIP_2026 } from "@/lib/calculators/tip";
import dynamic from "next/dynamic";

const id = "tip";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: meta?.title || "2026 Tip Calculator | Precision Gratuity Auditor",
  description: meta?.description || "Calculate gratuity with institutional precision. Split bills, audit tip percentages, and review global tipping etiquette for the 2026 hospitality landscape.",
  alternates: {
    canonical: meta?.canonical || "/tip",
  }
};

const HubClient = dynamic(
  () => import("./HubClient"),
  {
    ssr: true,
    loading: () => <div className="min-h-screen bg-slate-950" />
  }
);

export default function CalcTipPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "S-Class Tip Auditor",
        "description": metadata.description,
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "Any",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "HowTo",
        "name": "How to Calculate a Fair Tip",
        "description": "Step-by-step institutional guide for auditing gratuity and splitting service bills with precision.",
        "step": [
          {
            "@type": "HowToStep",
            "text": "Identify the total bill amount and the number of participants for the split."
          },
          {
            "@type": "HowToStep",
            "text": "Select the appropriate tip percentage based on service quality and regional etiquette benchmarks."
          },
          {
            "@type": "HowToStep",
            "text": "Input the data into the S-Class Auditor for a precision breakdown of individual shares and total gratuity."
          },
          {
            "@type": "HowToStep",
            "text": "Review the final audit result and adjust per-person contributions if necessary."
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://mysmartcalculators.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Finance",
            "item": "https://mysmartcalculators.com/finance"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Tip Calculator",
            "item": "https://mysmartcalculators.com/tip"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": TIP_2026.faqs.map((faq: { question: string; answer: string }) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
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

