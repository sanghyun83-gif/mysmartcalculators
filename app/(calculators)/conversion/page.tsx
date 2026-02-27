import { getCalculatorMeta } from "@/lib/registry/calculators";
import { CONVERSION_2026 } from "@/lib/calculators/conversion";
import ConversionClient from "./ConversionClient";

const id = "conversion";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: meta?.title || CONVERSION_2026.title,
  description: meta?.description || CONVERSION_2026.description,
  alternates: {
    canonical: meta?.canonical || "https://mysmartcalculators.com/conversion",
  },
};

export default function ConversionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Unit Conversion Calculator",
        description: meta?.description || CONVERSION_2026.description,
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
        name: "How to Convert Units",
        description: "Convert between metric and customary units for length, mass, volume, and temperature.",
        step: [
          {
            "@type": "HowToStep",
            text: "Select category and enter source value.",
          },
          {
            "@type": "HowToStep",
            text: "Choose source and target units.",
          },
          {
            "@type": "HowToStep",
            text: "Click Convert Units to review converted result.",
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
            name: "Unit Conversion",
            item: meta?.canonical || "https://mysmartcalculators.com/conversion",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: CONVERSION_2026.faqs.map((faq) => ({
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
      <ConversionClient />
    </>
  );
}
