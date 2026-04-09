import type { Metadata } from "next";
import Script from "next/script";
import CalculatorClient from "./CalculatorClient";

const canonical = "https://mysmartcalculators.com/workers-comp/calculator";

export const metadata: Metadata = {
  title: "Workers Compensation Calculator (2026) | TTD Weekly Benefit + Settlement Estimate",
  description:
    "Calculate workers comp weekly TTD benefits and estimate settlement range using 2026 state maximum rates. Includes state cap, waiting period, and injury schedule factors.",
  keywords: [
    "workers comp calculator",
    "workers compensation calculator",
    "ttd calculator",
    "work injury compensation calculator",
    "workers comp settlement estimate",
    "2026 workers comp rates",
  ],
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Workers Compensation Calculator (2026) | TTD + Settlement Estimate",
    description:
      "Estimate weekly workers comp benefits and settlement range with state-specific 2026 limits.",
    url: canonical,
    type: "website",
    images: [{ url: "/og-main.png", width: 1200, height: 630, alt: "Workers Comp Calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Workers Compensation Calculator (2026)",
    description: "TTD weekly benefit and settlement estimator with state caps.",
    images: ["/og-main.png"],
  },
};

export default function WorkersCompCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Workers Compensation Calculator (2026)",
        description:
          "Calculate workers comp weekly benefits and settlement range using 2026 state rate assumptions.",
        url: canonical,
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://mysmartcalculators.com/" },
          { "@type": "ListItem", position: 2, name: "Workers Comp", item: "https://mysmartcalculators.com/workers-comp" },
          { "@type": "ListItem", position: 3, name: "Calculator", item: canonical },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How is workers comp weekly benefit calculated?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Weekly benefit is usually average weekly wage multiplied by state replacement rate, then capped by state maximum and minimum limits.",
            },
          },
          {
            "@type": "Question",
            name: "What affects workers comp settlement estimate?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Settlement estimate is influenced by weekly benefit, body part schedule, impairment severity, and future earning impact assumptions.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="workers-comp-calculator-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CalculatorClient />
    </>
  );
}
