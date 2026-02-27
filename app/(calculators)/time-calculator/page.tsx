import { getCalculatorMeta } from "@/lib/registry/calculators";
import { TIME_CALCULATOR_2026 } from "@/lib/calculators/time-calculator";
import TimeCalculatorClient from "./TimeCalculatorClient";

const id = "time-calculator";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: meta?.title || TIME_CALCULATOR_2026.metadata.title,
  description: meta?.description || TIME_CALCULATOR_2026.metadata.description,
  keywords: TIME_CALCULATOR_2026.metadata.keywords,
  alternates: {
    canonical: meta?.canonical || "https://mysmartcalculators.com/time-calculator",
  },
};

export default function TimeCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Time Calculator",
        description: meta?.description || TIME_CALCULATOR_2026.metadata.description,
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
        name: "How to Calculate Time Duration",
        description: "Compute differences and add/subtract hours, minutes, and seconds.",
        step: [
          {
            "@type": "HowToStep",
            text: "Enter start and end time values.",
          },
          {
            "@type": "HowToStep",
            text: "Optionally enter a delta time for add/subtract calculations.",
          },
          {
            "@type": "HowToStep",
            text: "Click Calculate Time to review total seconds and H:M:S breakdown.",
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
            name: "General",
            item: "https://mysmartcalculators.com/calculators",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Time Calculator",
            item: meta?.canonical || "https://mysmartcalculators.com/time-calculator",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: TIME_CALCULATOR_2026.faqs.map((faq) => ({
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
      <TimeCalculatorClient />
    </>
  );
}

