import { getCalculatorMeta } from "@/lib/registry/calculators";
import { CALCULATORS } from "@/lib/calculators/mortgage";
import MortgageClient from "./MortgageClient";

const id = "mortgage";
const meta = getCalculatorMeta(id);
const mortgageCalc = CALCULATORS.find(c => c.id === "mortgage/calculator");

export const metadata = {
  title: meta?.title,
  description: meta?.description,
  alternates: {
    canonical: meta?.canonical,
  }
};

export default function CalcMortgagePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": meta?.title,
        "operatingSystem": "All",
        "applicationCategory": "FinanceApplication",
        "description": meta?.description,
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "HowTo",
        "name": "How to Calculate Mortgage Payments",
        "description": "Step-by-step institutional audit of your monthly mortgage obligations.",
        "step": [
          {
            "@type": "HowToStep",
            "text": "Specify the total home purchase price and down payment percentage."
          },
          {
            "@type": "HowToStep",
            "text": "Select the institutional interest rate and loan term duration."
          },
          {
            "@type": "HowToStep",
            "text": "Audit additional monthly costs including property tax and PMI."
          },
          {
            "@type": "HowToStep",
            "text": "Execute the calculation engine to generate the full amortization schedule."
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://mysmartcalculators.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Finance",
            "item": "https://mysmartcalculators.com/finance"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Mortgage Calculator",
            "item": meta?.canonical
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": mortgageCalc?.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        suppressHydrationWarning
      />
      <MortgageClient />
    </>
  );
}

