import { getCalculatorMeta } from "@/lib/registry/calculators";
import { PREGNANCY_2026 } from "@/lib/calculators/pregnancy";
import PregnancyClient from "./PregnancyClient";

const id = "pregnancy";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: meta?.title || "Pregnancy Due Date Calculator",
  description:
    meta?.description ||
    "Calculate estimated due date, current gestational age, and milestone timeline using LMP, conception, IVF, or ultrasound methods.",
  alternates: {
    canonical: meta?.canonical || "https://mysmartcalculators.com/pregnancy",
  },
};

export default function PregnancyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Pregnancy Due Date Calculator",
        description: meta?.description,
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
        name: "How to Calculate Pregnancy Due Date",
        description: "Estimate EDD from LMP, conception, IVF transfer date, or provider-established due date.",
        step: [
          {
            "@type": "HowToStep",
            text: "Choose your method: LMP, conception, IVF, or ultrasound due date.",
          },
          {
            "@type": "HowToStep",
            text: "Enter the reference date and cycle length for LMP if applicable.",
          },
          {
            "@type": "HowToStep",
            text: "Click Calculate Due Date and review EDD, gestational week/day, and milestone timeline.",
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
            name: "Pregnancy Calculator",
            item: meta?.canonical || "https://mysmartcalculators.com/pregnancy",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: PREGNANCY_2026.faqs.map((faq) => ({
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
      <PregnancyClient />
    </>
  );
}
