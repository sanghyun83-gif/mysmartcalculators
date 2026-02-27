import { getCalculatorMeta } from "@/lib/registry/calculators";
import { AGE_2026 } from "@/lib/calculators/age";
import AgeClient from "./AgeClient";

const id = "age";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: meta?.title,
  description: meta?.description,
  alternates: {
    canonical: meta?.canonical,
  },
};

export default function AgePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Age Calculator",
        description: meta?.description,
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
        name: "How to Calculate Age",
        description: "Calculate age using birth date and target date with leap-year-aware date math.",
        step: [
          {
            "@type": "HowToStep",
            text: "Enter your birth date.",
          },
          {
            "@type": "HowToStep",
            text: "Set the target date to today or another date.",
          },
          {
            "@type": "HowToStep",
            text: "Click Calculate Age to view years, months, days, and total duration metrics.",
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
            name: "Age Calculator",
            item: meta?.canonical,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: AGE_2026.faqs.map((faq) => ({
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
      <AgeClient />
    </>
  );
}
