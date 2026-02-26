import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "bar-insurance";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: "2026 Bar Insurance Calculator | Official S-Class Liability Auditor",
  description: "Calculate bar and tavern insurance premiums with 2026 precision. Official S-Class auditor for liquor liability, GL, and assault coverage benchmarks.",
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

export default function CalcBarInsurancePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "2026 Bar Insurance Calculator",
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
        "name": "How to Calculate Bar Insurance Premium",
        "step": [
          {
            "@type": "HowToStep",
            "text": "Select the establishment type (Neighborhood Bar, Sports Bar, Nightclub, etc.)."
          },
          {
            "@type": "HowToStep",
            "text": "Choose the required coverage layers (Liquor Liability, GL, Assault & Battery)."
          },
          {
            "@type": "HowToStep",
            "text": "Input estimated annual revenue and establishment size."
          },
          {
            "@type": "HowToStep",
            "text": "Execute premium audit to determine 2026 market-weighted insurance costs."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does bar insurance cost in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In 2026, standard bar insurance packages typically range from $8,000 to $20,000 per year, depending on liquor sales volume and establishment risk profile."
            }
          },
          {
            "@type": "Question",
            "name": "Why is nightclub insurance more expensive?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nightclubs face higher premiums (often +65%) due to increased assault risk, late-night operating hours, and higher patron density compared to neighborhood pubs."
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

