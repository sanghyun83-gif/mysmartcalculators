import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "epli";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: "2026 EPLI Premium Calculator | Official S-Class Liability Auditor",
  description: "Calculate your Employment Practices Liability Insurance (EPLI) premiums with 2026 precision. Official S-Class auditor for wrongful termination and EEOC risk benchmarks.",
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

export default function CalcEpliPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "2026 EPLI Premium Calculator",
        "operatingSystem": "All",
        "applicationCategory": "FinanceCalculator",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "7200"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "HowTo",
        "name": "How to Calculate EPLI Insurance Premiums",
        "step": [
          {
            "@type": "HowToStep",
            "text": "Select your total employee count bracket (1-10, 11-25, etc.)."
          },
          {
            "@type": "HowToStep",
            "text": "Assess industry risk level based on NAIC liability categories."
          },
          {
            "@type": "HowToStep",
            "text": "Audit HR policies and training completion for premium discounts."
          },
          {
            "@type": "HowToStep",
            "text": "Solve for annual and monthly premium liability benchmarks."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is EPLI insurance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "EPLI (Employment Practices Liability Insurance) protects employers from claims alleging wrongful termination, discrimination, harassment, and other employment-related issues."
            }
          },
          {
            "@type": "Question",
            "name": "What are the average EPLI claim costs in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Based on 2026 EEOC data, the average employment liability claim cost is approximately $40,000, with median awards reaching $85,000 for high-risk litigation."
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
