import { getCalculatorMeta } from "@/lib/registry/calculators";
import { CALORIE_2026 } from "@/lib/calculators/calorie";
import dynamic from "next/dynamic";

const id = "calorie";
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

export default function CalcCaloriePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": meta?.title || "Calorie Calculator",
        "description": meta?.description || "High-precision metabolic audit engine for TDEE and BMR calculation.",
        "applicationCategory": "HealthApplication",
        "operatingSystem": "Any",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "21840"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "HowTo",
        "name": "How to Calculate Daily Calorie Needs",
        "description": "Step-by-step institutional guide for auditing TDEE and metabolic energy flux.",
        "step": [
          {
            "@type": "HowToStep",
            "text": "Input your current weight, height, age, and biological sex into the S-Class auditor."
          },
          {
            "@type": "HowToStep",
            "text": "Select your activity multiplier to define the NEAT and EAT delta."
          },
          {
            "@type": "HowToStep",
            "text": "Identify your primary goal (Maintenance, Deficit, or Surplus Architecture)."
          },
          {
            "@type": "HowToStep",
            "text": "Execute the audit to view the full thermodynamic breakdown and macro-targets."
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
            "name": "Health",
            "item": "https://mysmartcalculators.com/health"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Calorie Calculator",
            "item": meta?.canonical || "https://mysmartcalculators.com/calorie"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": CALORIE_2026.faqs.map((faq: { question: string; answer: string }) => ({
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
