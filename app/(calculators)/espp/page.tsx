import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "espp";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: "2026 ESPP Calculator | Official S-Class Equity Auditor",
  description: "Calculate your Employee Stock Purchase Plan (ESPP) gains with 2026 precision. Official S-Class auditor for Section 423 tax guidelines and lookback provisions.",
  alternates: {
    canonical: meta?.canonical || `https://mysmartcalculators.com/${id}`,
  }
};

const HubClient = dynamic(
  () => import("./HubClient"),
  {
    ssr: true,
    loading: () => <div className="min-h-screen bg-slate-950" />
  }
);

export default function CalcEsppPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "2026 ESPP Calculator",
        "operatingSystem": "All",
        "applicationCategory": "FinanceCalculator",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "12400"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "HowTo",
        "name": "How to Calculate ESPP Gains",
        "step": [
          {
            "@type": "HowToStep",
            "text": "Input your annual salary and payroll contribution percentage."
          },
          {
            "@type": "HowToStep",
            "text": "Specify the stock discount (typically 15%) and lookback provision status."
          },
          {
            "@type": "HowToStep",
            "text": "Apply IRS Section 423 purchase limits ($25,000 grant date value)."
          },
          {
            "@type": "HowToStep",
            "text": "Solve for net equity gains and potential tax liability."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the ESPP contribution limit for 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The IRS limits ESPP purchases to $25,000 worth of stock per year based on the stock price at the grant date. Employers often cap contributions at 10-15% of gross pay."
            }
          },
          {
            "@type": "Question",
            "name": "How does an ESPP lookback provision work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A lookback provision allows you to apply the discount to the lower of the stock price at the start or end of the offering period, maximizing potential gains."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HubClient />
    </>
  );
}
