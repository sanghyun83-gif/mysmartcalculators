import type { Metadata } from "next";
import Script from "next/script";
import { BMI_2026 } from "@/lib/calculators/bmi";
import BMIClient from "./BMIClient";

const seo = {
  title: "BMI Calculator (WHO/CDC) | Body Mass Index for Adults & Teens",
  description:
    "Calculate BMI instantly using WHO/CDC ranges for adults and teens. Get BMI category, healthy weight range, and practical health guidance.",
  canonical: "https://mysmartcalculators.com/bmi",
};

const meta = {
  title: seo.title,
  description: seo.description,
  canonical: seo.canonical,
};

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: [
    "bmi calculator",
    "body mass index calculator",
    "bmi chart",
    "healthy weight range",
    "who bmi",
    "cdc bmi",
    "adult bmi",
    "teen bmi",
  ],
  alternates: {
    canonical: seo.canonical,
  },
  openGraph: {
    title: seo.title,
    description:
      "Calculate BMI instantly using WHO/CDC ranges for adults and teens. Get BMI category and healthy weight range.",
    url: seo.canonical,
    type: "website",
    images: [{ url: "/og-main.png", width: 1200, height: 630, alt: "BMI Calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description:
      "Calculate BMI instantly with WHO/CDC ranges and get category + healthy weight range.",
    images: ["/og-main.png"],
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
      <Script
        id="bmi-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BMIClient />
    </>
  );
}

