import { getCalculatorMeta } from "@/lib/registry/calculators";
import { DUE_DATE_2026 } from "@/lib/calculators/due-date";
import DueDateClient from "./DueDateClient";

const id = "due-date";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: meta?.title || "Due Date Calculator",
  description:
    meta?.description ||
    "Calculate estimated due date and pregnancy timeline using LMP, conception, IVF transfer, or ultrasound-based methods.",
  alternates: {
    canonical: meta?.canonical || "https://mysmartcalculators.com/due-date",
  },
};

export default function DueDatePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Due Date Calculator",
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
        name: "How to Calculate Due Date",
        description: "Estimate expected delivery date from standard pregnancy dating methods.",
        step: [
          {
            "@type": "HowToStep",
            text: "Choose dating method: LMP, conception, IVF transfer, or known ultrasound due date.",
          },
          {
            "@type": "HowToStep",
            text: "Enter the reference date.",
          },
          {
            "@type": "HowToStep",
            text: "Click Calculate Due Date to review EDD, gestational age, and progress.",
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
            name: "Due Date Calculator",
            item: meta?.canonical || "https://mysmartcalculators.com/due-date",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: DUE_DATE_2026.faqs.map((faq) => ({
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
      <DueDateClient />
    </>
  );
}
