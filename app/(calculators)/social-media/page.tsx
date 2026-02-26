import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";
import { SOCIAL_2026 } from "@/lib/calculators/social-media";

const id = "social-media";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: "Social Media Addiction Lawsuit Calculator 2026 | MDL 3047 Audit",
  description: "Expert 2026 Social Media settlement engine. Calculate MDL 3047 lawsuit values for youth mental health, depression, and anxiety using algorithmic liability multipliers.",
  alternates: {
    canonical: meta?.canonical || "https://mysmartcalculators.com/social-media",
  },
  openGraph: {
    title: "Social Media Addiction Lawsuit Calculator 2026 | MDL 3047",
    description: "Calculate your social media lawsuit settlement value using the definitive 2026 design-based liability matrix.",
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

export default function SocialMediaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Social Media Settlement Auditor 2026",
    "applicationCategory": "LegalApplication",
    "operatingSystem": "Any",
    "description": "2026 Expert forensic calculator for Social Media MDL 3047 litigation.",
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
        "name": "What is the average social media addiction settlement in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Early 2026 projections for severe (Tier 1) injuries including hospitalization or suicide attempts range from $500,000 to over $1.5M when design-based liability exceptions apply."
        }
      },
      {
        "@type": "Question",
        "name": "How does Section 230 affect my social media lawsuit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MDL 3047 focuses on 'product design' defects (algorithms, infinite scroll) rather than third-party content, which bypasses traditional Section 230 immunity."
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
