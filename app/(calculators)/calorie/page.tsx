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

import CalorieClient from "./CalorieClient"; // Changed from HubClient

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
        "description": "Step-by-step guide for calculating TDEE and daily calorie requirements.",
        "step": [
          {
            "@type": "HowToStep",
            "text": "Input your current weight, height, age, and gender into the calculator."
          },
          {
            "@type": "HowToStep",
            "text": "Select your activity level to determine your TDEE (Total Daily Energy Expenditure)."
          },
          {
            "@type": "HowToStep",
            "text": "Identify your primary goal (Maintenance, Deficit, or Surplus)."
          },
          {
            "@type": "HowToStep",
            "text": "Review the results to view your custom calorie and macro-targets."
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
        suppressHydrationWarning
      />
      <CalorieClient />
    </>
  );
}
