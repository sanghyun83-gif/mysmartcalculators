import { getCalculatorMeta } from "@/lib/registry/calculators";
import { SQUARE_FOOTAGE_2026 } from "@/lib/calculators/square-footage";
import SquareFootageClient from "./SquareFootageClient";

const id = "square-footage";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: meta?.title || SQUARE_FOOTAGE_2026.title,
  description: meta?.description || SQUARE_FOOTAGE_2026.description,
  alternates: {
    canonical: meta?.canonical || "https://mysmartcalculators.com/square-footage",
  },
};

export default function SquareFootagePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Square Footage Calculator",
        description: meta?.description || SQUARE_FOOTAGE_2026.description,
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
        name: "How to Calculate Square Footage",
        description: "Estimate area by selecting shape and entering required dimensions.",
        step: [
          {
            "@type": "HowToStep",
            text: "Select geometric shape.",
          },
          {
            "@type": "HowToStep",
            text: "Enter the required dimensions in feet.",
          },
          {
            "@type": "HowToStep",
            text: "Click Calculate Area to view square feet and square meters.",
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
            name: "Square Footage Calculator",
            item: meta?.canonical || "https://mysmartcalculators.com/square-footage",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: SQUARE_FOOTAGE_2026.faqs.map((faq) => ({
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
      <SquareFootageClient />
    </>
  );
}
