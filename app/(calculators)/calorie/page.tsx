import type { Metadata } from "next";
import { CALORIE_2026 } from "@/lib/calculators/calorie";
import CalorieClient from "./CalorieClient";
import Script from "next/script";

const seo = {
  title: "Calorie Calculator 2026 | TDEE, BMR & Macro Planning",
  description:
    "Estimate daily calorie targets with Mifflin-St Jeor BMR, activity-based TDEE, and macro blueprints. Compare maintenance, deficit, and surplus plans.",
  canonical: "https://mysmartcalculators.com/calorie",
};

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: [
    "calorie calculator",
    "tdee calculator",
    "bmr calculator",
    "daily calorie needs",
    "macro calculator",
    "weight loss calories",
    "maintenance calories",
    "mifflin st jeor",
  ],
  alternates: {
    canonical: seo.canonical,
  },
  openGraph: {
    title: seo.title,
    description:
      "Calculate BMR, TDEE, and daily calorie targets with scenario and sensitivity planning.",
    url: seo.canonical,
    type: "website",
    images: [{ url: "/og-main.png", width: 1200, height: 630, alt: "Calorie Calculator 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: "Calorie planning with BMR/TDEE engine, macro guidance, and decision-ready outputs.",
    images: ["/og-main.png"],
  },
};

export default function CalcCaloriePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: seo.title,
        description: seo.description,
        applicationCategory: "HealthApplication",
        operatingSystem: "Any",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "HowTo",
        name: "How to calculate daily calorie needs",
        description: "Use BMR, activity profile, and goal delta to set daily calorie targets.",
        step: [
          {
            "@type": "HowToStep",
            text: "Enter age, sex, height, weight, and activity level.",
          },
          {
            "@type": "HowToStep",
            text: "Set your goal adjustment (deficit, maintain, or surplus).",
          },
          {
            "@type": "HowToStep",
            text: "Review BMR, TDEE, and target calories with macro blueprint options.",
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://mysmartcalculators.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Health",
            item: "https://mysmartcalculators.com/health",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Calorie Calculator",
            item: seo.canonical,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: CALORIE_2026.faqs.map((faq: { question: string; answer: string }) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        suppressHydrationWarning
      />
      <CalorieClient />
    </>
  );
}