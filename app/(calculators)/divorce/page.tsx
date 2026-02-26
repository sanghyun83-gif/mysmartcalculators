import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "divorce";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: "2026 Divorce Settlement Calculator | Official S-Class Alimony Auditor",
  description: "Calculate your divorce settlement and alimony with 2026 precision. Official S-Class auditor for community property and equitable distribution state laws.",
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

export default function CalcDivorcePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "2026 Divorce Settlement Calculator",
        "operatingSystem": "All",
        "applicationCategory": "LegalApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "HowTo",
        "name": "How to Calculate Divorce Settlement",
        "step": [
          {
            "@type": "HowToStep",
            "text": "Identify if your state follows Community Property or Equitable Distribution rules."
          },
          {
            "@type": "HowToStep",
            "text": "Audit marital assets including real estate, 401ks, and joint accounts."
          },
          {
            "@type": "HowToStep",
            "text": "Solve for spousal support (alimony) based on income disparity and marriage duration."
          },
          {
            "@type": "HowToStep",
            "text": "Generate final forensic settlement division including debt offsets."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the 50/50 rule in divorce settlements?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The 50/50 rule typically applies in Community Property states like California and Texas, where all marital assets and debts earned during the marriage are split equally between spouses."
            }
          },
          {
            "@type": "Question",
            "name": "How is alimony calculated in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Alimony is generally calculated as a percentage of the difference between spouses' incomes (often 25-40%), with the duration determined by the total years of marriage."
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

