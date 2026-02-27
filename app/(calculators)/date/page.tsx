import { getCalculatorMeta } from "@/lib/registry/calculators";
import { DATE_2026 } from "@/lib/calculators/date";
import DateClient from "./DateClient";

const id = "date";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: meta?.title || DATE_2026.metadata.title,
  description: meta?.description || DATE_2026.metadata.description,
  keywords: DATE_2026.metadata.keywords,
  alternates: {
    canonical: meta?.canonical || "https://mysmartcalculators.com/date",
  },
};

export default function DatePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Date Calculator",
        description: meta?.description || DATE_2026.metadata.description,
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
        name: "How to Calculate Date Intervals",
        description: "Compute total day differences, business days, and date offsets using ISO date inputs.",
        step: [
          {
            "@type": "HowToStep",
            text: "Enter start date and end date.",
          },
          {
            "@type": "HowToStep",
            text: "Optionally enter years, months, and days to add.",
          },
          {
            "@type": "HowToStep",
            text: "Click Calculate Date Results to review total days, business days, and full breakdown.",
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
            name: "Date Calculator",
            item: meta?.canonical || "https://mysmartcalculators.com/date",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: DATE_2026.faqs.map((faq) => ({
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
      <DateClient />
    </>
  );
}
