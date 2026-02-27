import { getCalculatorMeta } from "@/lib/registry/calculators";
import { BINARY_2026 } from "@/lib/calculators/binary";
import BinaryClient from "./BinaryClient";

const id = "binary";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: meta?.title || "Binary Calculator",
  description: meta?.description || BINARY_2026.metadata.description,
  keywords: BINARY_2026.metadata.keywords,
  alternates: {
    canonical: meta?.canonical || "https://mysmartcalculators.com/binary",
  },
};

export default function BinaryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Binary Calculator",
        description: meta?.description || BINARY_2026.metadata.description,
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
        name: "How to Convert and Operate on Binary Values",
        description: "Convert between bases and run bitwise operations with fixed bit width.",
        step: [
          {
            "@type": "HowToStep",
            text: "Enter source value and choose source/target bases.",
          },
          {
            "@type": "HowToStep",
            text: "Enter two binary inputs and choose XOR, AND, or OR.",
          },
          {
            "@type": "HowToStep",
            text: "Set bit width and click Calculate Binary Result.",
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
            name: "Binary Calculator",
            item: meta?.canonical || "https://mysmartcalculators.com/binary",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: BINARY_2026.faqs.map((faq) => ({
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
      <BinaryClient />
    </>
  );
}
