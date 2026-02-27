import { getCalculatorMeta } from "@/lib/registry/calculators";
import { SALARY_2026 } from "@/lib/calculators/salary";
import SalaryClient from "./SalaryClient";

const id = "salary";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: meta?.title || "Salary Calculator",
  description:
    meta?.description ||
    "Convert salary across annual, monthly, bi-weekly, weekly, daily, and hourly pay periods.",
  alternates: {
    canonical: meta?.canonical || "https://mysmartcalculators.com/salary",
  },
};

export default function SalaryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Salary Calculator",
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
        name: "How to Convert Salary Across Pay Periods",
        description: "Normalize compensation to annual value and convert across monthly, weekly, and hourly amounts.",
        step: [
          {
            "@type": "HowToStep",
            text: "Enter pay amount and its original pay period.",
          },
          {
            "@type": "HowToStep",
            text: "Set hours and days per week for hourly and daily normalization.",
          },
          {
            "@type": "HowToStep",
            text: "Click Calculate Salary to view period-by-period conversions.",
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
            name: "Salary Calculator",
            item: meta?.canonical || "https://mysmartcalculators.com/salary",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: SALARY_2026.faqs.map((faq) => ({
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
      <SalaryClient />
    </>
  );
}
