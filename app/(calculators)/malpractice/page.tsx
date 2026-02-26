import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";
import { SITE, MALPRACTICE_CONSTANTS } from "@/lib/calculators/malpractice";

const id = "malpractice";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: meta?.title,
  description: meta?.description,
  alternates: {
    canonical: meta?.canonical,
  }
};

const HubClient = dynamic(
  () => import("./HubClient"),
  {
    ssr: true,
    loading: () => <div className="min-h-screen bg-slate-950" />
  }
);

export default function CalcMalpracticePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": SITE.name,
    "operatingSystem": "All",
    "applicationCategory": "LegalApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": SITE.description,};

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the average medical malpractice settlement in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Average settlements vary by type: Surgical errors average $500,000, Birth injuries can exceed $1.5 million, and Misdiagnosis cases average $350,000. These values are based on the latest 2026 actuarial benchmarks."
        }
      },
      {
        "@type": "Question",
        "name": "What are 'Never-Events' in medical malpractice?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Never-events are egregious medical errors that should never occur, such as performing surgery on the wrong body part, leaving a surgical sponge inside a patient, or administering the wrong blood type. These cases often command significantly higher settlement multipliers (1.5x+)."
        }
      },
      {
        "@type": "Question",
        "name": "How does the 'Standard of Care' impact case valuation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Standard of Care is the level of care a reasonably competent healthcare provider would provide under similar circumstances. Proving a breach of this standard is the core of a malpractice claim and typically requires board-certified expert testimony."
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

