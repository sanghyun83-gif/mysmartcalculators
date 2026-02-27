import { getCalculatorMeta } from "@/lib/registry/calculators";
import { TIP_2026 } from "@/lib/calculators/tip";
import TipClient from "./TipClient";

const id = "tip";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: meta?.title || "Tip Calculator",
  description:
    meta?.description ||
    "Calculate tip amount, total bill, and per-person split using standard gratuity percentages.",
  alternates: {
    canonical: meta?.canonical || "https://mysmartcalculators.com/tip",
  },
};

export default function TipPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Tip Calculator",
        description: meta?.description,
        applicationCategory: "FinanceApplication",
        operatingSystem: "All",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "HowTo",
        name: "How to Calculate a Tip",
        description: "Estimate gratuity and split total per person from bill amount and tip rate.",
        step: [
          {
            "@type": "HowToStep",
            text: "Enter the bill amount.",
          },
          {
            "@type": "HowToStep",
            text: "Set tip percentage and number of people sharing the bill.",
          },
          {
            "@type": "HowToStep",
            text: "Click Calculate Tip to review tip amount, total bill, and per-person share.",
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
            name: "Finance",
            item: "https://mysmartcalculators.com/calculators",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Tip Calculator",
            item: meta?.canonical || "https://mysmartcalculators.com/tip",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: TIP_2026.faqs.map((faq) => ({
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
      <TipClient />
    </>
  );
}
