import ScientificClient from "./ScientificClient";
import { SCIENTIFIC_ENGINE_2026, SCIENTIFIC_META } from "@/lib/calculators/scientific";

export const metadata = {
  title: SCIENTIFIC_META.title,
  description: SCIENTIFIC_META.description,
  alternates: {
    canonical: SCIENTIFIC_META.canonical,
  },
};

export default function ScientificPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Scientific Calculator",
        description: SCIENTIFIC_META.description,
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "All",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "HowTo",
        name: "How to Use the Scientific Calculator",
        description: "Compute arithmetic and scientific functions with degree or radian mode.",
        step: [
          {
            "@type": "HowToStep",
            text: "Enter values for binary or scientific function inputs.",
          },
          {
            "@type": "HowToStep",
            text: "Choose operation, function, angle mode, and output precision.",
          },
          {
            "@type": "HowToStep",
            text: "Select Calculate Scientific Result to produce formatted output.",
          },
          {
            "@type": "HowToStep",
            text: "Use the reference table and FAQ to validate domain limits and interpretation.",
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
            name: "Math",
            item: "https://mysmartcalculators.com/math",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Scientific Calculator",
            item: SCIENTIFIC_META.canonical,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: SCIENTIFIC_ENGINE_2026.faqs.map((faq) => ({
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        suppressHydrationWarning
      />
      <ScientificClient />
    </>
  );
}
