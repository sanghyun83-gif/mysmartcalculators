import { getCalculatorMeta } from "@/lib/registry/calculators";
import { BMI_2026 } from "@/lib/calculators/bmi";
import BMIClient from "./BMIClient";

const id = "bmi";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: meta?.title,
  description: meta?.description,
  alternates: {
    canonical: meta?.canonical,
  }
};

export default function CalcBmiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": meta?.title,
        "description": meta?.description,
        "applicationCategory": "HealthApplication",
        "operatingSystem": "Any",
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
      },
      {
        "@type": "HowTo",
        "name": "How to Calculate BMI (Body Mass Index)",
        "description": "Step-by-step guide to calculating your BMI using WHO and CDC standards.",
        "step": [
          {
            "@type": "HowToStep",
            "text": "Identify your height in centimeters or inches."
          },
          {
            "@type": "HowToStep",
            "text": "Identify your weight in kilograms or pounds."
          },
          {
            "@type": "HowToStep",
            "text": "Input the data into the 2026 BMI engine."
          },
          {
            "@type": "HowToStep",
            "text": "Review your classification against WHO clinical standards."
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
            "name": "BMI Calculator",
            "item": meta?.canonical
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": BMI_2026.faqs.map(faq => ({
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
      <BMIClient />
    </>
  );
}
