import { getCalculatorMeta } from "@/lib/registry/calculators";
import { OVULATION_2026 } from "@/lib/calculators/ovulation";
import OvulationClient from "./OvulationClient";

const id = "ovulation";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: meta?.title || OVULATION_2026.title,
  description: meta?.description || OVULATION_2026.description,
  alternates: {
    canonical: meta?.canonical || "https://mysmartcalculators.com/ovulation",
  },
};

export default function OvulationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Ovulation Calculator",
        description: meta?.description || OVULATION_2026.description,
        applicationCategory: "HealthApplication",
        operatingSystem: "All",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "HowTo",
        name: "How to Calculate Ovulation Window",
        description: "Estimate fertile window from cycle length and last period date.",
        step: [
          {
            "@type": "HowToStep",
            text: "Enter last period start date.",
          },
          {
            "@type": "HowToStep",
            text: "Set cycle length and luteal phase length.",
          },
          {
            "@type": "HowToStep",
            text: "Click Calculate Fertility Window to review fertile days and ovulation date.",
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
            item: "https://mysmartcalculators.com/calculators",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Ovulation Calculator",
            item: meta?.canonical || "https://mysmartcalculators.com/ovulation",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: OVULATION_2026.faqs.map((faq) => ({
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
      <OvulationClient />
    </>
  );
}