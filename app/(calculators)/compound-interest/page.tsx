import { getCalculatorMeta } from "@/lib/registry/calculators";
import { COMPOUND_2026 } from "@/lib/calculators/compound-interest";
import CompoundInterestClient from "./CompoundInterestClient";

const id = "compound-interest";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: meta?.title || "Compound Interest Calculator",
  description:
    meta?.description ||
    "Calculate future value, total interest, and yearly growth from principal, contribution, rate, and time.",
  alternates: {
    canonical: meta?.canonical || "https://mysmartcalculators.com/compound-interest",
  },
};

export default function CompoundInterestPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Compound Interest Calculator",
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
        name: "How to Calculate Compound Interest",
        description: "Estimate long-term growth by combining principal, recurring contributions, annual return, and time horizon.",
        step: [
          {
            "@type": "HowToStep",
            text: "Enter principal and monthly contribution.",
          },
          {
            "@type": "HowToStep",
            text: "Set annual return, years, and compounding frequency.",
          },
          {
            "@type": "HowToStep",
            text: "Click Calculate Growth to review projected value, principal, and earned interest.",
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
            name: "Compound Interest Calculator",
            item: meta?.canonical || "https://mysmartcalculators.com/compound-interest",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: COMPOUND_2026.faqs.map((faq) => ({
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
      <CompoundInterestClient />
    </>
  );
}
