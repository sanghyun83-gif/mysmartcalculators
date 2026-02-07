import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";
import { OZEMPIC_CONSTANTS } from "@/lib/calculators/ozempic";

const id = "ozempic";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: "Ozempic Settlement Calculator 2026 | MDL 3094 gastroparesis Audit",
  description: "Professional 2026 Ozempic settlement engine. Calculate MDL 3094 lawsuit values for Gastroparesis, NAION, and Ileus using real-time actuarial multipliers.",
  alternates: {
    canonical: meta?.canonical || "https://mysmartcalculators.com/ozempic",
  },
  openGraph: {
    title: "Ozempic Settlement Calculator 2026 | MDL 3094 Audit",
    description: "Calculate your Ozempic lawsuit settlement value using the definitive 2026 MDL points matrix.",
    type: "website",
  }
};

const HubClient = dynamic(
  () => import("./HubClient"),
  {
    ssr: true,
    loading: () => <div className="min-h-screen bg-slate-950" />
  }
);

export default function CalcOzempicPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Ozempic Settlement Auditor 2026",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Any",
    "description": "2026 Expert settlement calculator for Ozempic MDL 3094 litigation.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the average Ozempic settlement amount in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Average settlements vary by injury tier. Tier 1 cases (NAION/Pacemaker) are estimated between $500,000 and $1.5M, while Tier 3 GI distress claims range from $30,000 to $100,000."
        }
      },
      {
        "@type": "Question",
        "name": "Does the MDL include Wegovy or Mounjaro?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, MDL 3094 consolidates claims for GLP-1 agonists including Ozempic, Wegovy, and Mounjaro involving gastroparesis or intestinal blockage."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <HubClient />
    </>
  );
}
