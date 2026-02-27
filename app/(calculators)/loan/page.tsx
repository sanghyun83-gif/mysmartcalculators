import { getCalculatorMeta } from "@/lib/registry/calculators";
import { LOAN_2026 } from "@/lib/calculators/loan";
import LoanClient from "./LoanClient";

const id = "loan";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: meta?.title || "Loan Calculator & Amortization",
  description: meta?.description || "Calculate monthly payment, total interest, and payoff date with an amortized loan model.",
  alternates: {
    canonical: meta?.canonical || "https://mysmartcalculators.com/loan",
  },
};

export default function LoanPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Loan Calculator",
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
        name: "How to Calculate Loan Payments",
        description: "Estimate monthly payments and interest using amount, APR, and term.",
        step: [
          {
            "@type": "HowToStep",
            text: "Enter loan amount.",
          },
          {
            "@type": "HowToStep",
            text: "Enter APR and loan term in years.",
          },
          {
            "@type": "HowToStep",
            text: "Click Calculate Loan and review payment, interest, and payoff metrics.",
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
            name: "Loan Calculator",
            item: meta?.canonical || "https://mysmartcalculators.com/loan",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: LOAN_2026.faqs.map((faq) => ({
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
      <LoanClient />
    </>
  );
}
