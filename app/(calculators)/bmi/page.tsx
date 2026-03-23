import { getCalculatorMeta } from "@/lib/registry/calculators";
import { BMI_2026 } from "@/lib/calculators/bmi";
import BMIClient from "./BMIClient";

const id = "bmi";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: meta?.title || "BMI Calculator | 2026 WHO & CDC Body Mass Index Tool",
  description: meta?.description || "Calculate BMI with 2026 WHO/CDC standards, lifecycle trend guidance, sensitivity scenarios, and source-backed interpretation.",
  keywords: [
    "bmi calculator",
    "body mass index calculator",
    "who bmi categories",
    "cdc bmi chart",
    "healthy weight range calculator",
  ],
  alternates: {
    canonical: meta?.canonical || "https://mysmartcalculators.com/bmi",
  },
  openGraph: {
    title: meta?.title || "BMI Calculator | 2026 WHO & CDC Body Mass Index Tool",
    description: meta?.description || "BMI result, category interpretation, trend lifecycle simulation, and sensitivity analysis in one workflow.",
    url: meta?.canonical || "https://mysmartcalculators.com/bmi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: meta?.title || "BMI Calculator | 2026 WHO & CDC Body Mass Index Tool",
    description: meta?.description || "Clinical BMI interpretation with evidence matrix, readiness pack, and scenario planning.",
  },
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
        },},
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

