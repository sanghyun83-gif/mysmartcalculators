import { getCalculatorMeta } from "@/lib/registry/calculators";
import { GRADE_2026 } from "@/lib/calculators/grade";
import GradeClient from "./GradeClient";

const id = "grade";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: meta?.title || "Grade Calculator",
  description:
    meta?.description ||
    "Calculate weighted average, letter grade, GPA mapping, and final exam score needed for a target grade.",
  alternates: {
    canonical: meta?.canonical || "https://mysmartcalculators.com/grade",
  },
};

export default function GradePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Grade Calculator",
        description: meta?.description,
        applicationCategory: "EducationalApplication",
        operatingSystem: "All",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "HowTo",
        name: "How to Calculate a Weighted Grade",
        description: "Estimate current course standing and final exam requirement from assignment scores and weights.",
        step: [
          {
            "@type": "HowToStep",
            text: "Enter assignment scores and their weight percentages.",
          },
          {
            "@type": "HowToStep",
            text: "Set final exam weight and target course grade.",
          },
          {
            "@type": "HowToStep",
            text: "Click Calculate Grade and review weighted average, letter grade, and final needed score.",
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
            name: "Education",
            item: "https://mysmartcalculators.com/calculators",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Grade Calculator",
            item: meta?.canonical || "https://mysmartcalculators.com/grade",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: GRADE_2026.faqs.map((faq) => ({
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
      <GradeClient />
    </>
  );
}
