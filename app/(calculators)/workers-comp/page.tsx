import type { Metadata } from "next";
import Script from "next/script";
import WorkersCompClient from "./WorkersCompClient";

const seo = {
  title: "Workers Comp Calculator 2026 | TTD Benefits, PPD Estimate & Settlement Range",
  description:
    "Estimate workers compensation benefits and settlement range with state-aware assumptions. Review TTD, PPD, timeline, and decision guidance in one place.",
  canonical: "https://mysmartcalculators.com/workers-comp",
};
const meta = {
  title: seo.title,
  description: seo.description,
  canonical: seo.canonical,
};

const FAQ_SCHEMA = [
  {
    question: "How is workers comp benefit calculated in this model?",
    answer:
      "Weekly benefit starts from average weekly wage times state replacement rate, then applies state max and min caps.",
  },
  {
    question: "What does waiting period mean?",
    answer:
      "Waiting period is the initial unpaid duration before benefits start, unless retroactive state conditions are met.",
  },
  {
    question: "What is claim lifecycle simulation?",
    answer:
      "Claim lifecycle simulation maps injury date, waiting period, retroactive trigger, MMI estimate, and filing timeline.",
  },
  {
    question: "Is this legal advice?",
    answer:
      "No. This is an educational estimate and not legal advice or a guaranteed claim outcome.",
  },
] as const;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: [
    "workers comp calculator",
    "workers compensation calculator",
    "ttd calculator",
    "ppd calculator",
    "workers comp settlement calculator",
    "work injury compensation",
    "state workers comp",
    "2026 workers comp",
  ],
  alternates: {
    canonical: seo.canonical,
  },
  openGraph: {
    title: seo.title,
    description:
      "Estimate TTD/PPD benefits and settlement range with state-aware workers comp assumptions.",
    url: seo.canonical,
    type: "website",
    images: [
      {
        url: "/og-main.png",
        width: 1200,
        height: 630,
        alt: "Workers Comp Calculator 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: "Estimate workers comp benefits, timeline, and settlement range quickly.",
    images: ["/og-main.png"],
  },
};

export default function WorkersCompPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: meta?.title,
        description: meta?.description,
        url: meta?.canonical,
        inLanguage: "en-US",
        dateModified: "2026-03-21",
      },
      {
        "@type": "SoftwareApplication",
        name: "Workers Comp Calculator",
        description: meta?.description,
        applicationCategory: "LegalService",
        operatingSystem: "All",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "HowTo",
        name: "How to estimate workers compensation benefit",
        step: [
          { "@type": "HowToStep", text: "Select state, weekly wage, and injury body part." },
          { "@type": "HowToStep", text: "Set disability assumptions and duration inputs." },
          { "@type": "HowToStep", text: "Review weekly benefit, scenario table, and net settlement range." },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://mysmartcalculators.com/" },
          { "@type": "ListItem", position: 2, name: "Workers Comp", item: "https://mysmartcalculators.com/workers-comp" },
          { "@type": "ListItem", position: 3, name: "Workers Comp Calculator", item: meta?.canonical || "https://mysmartcalculators.com/workers-comp" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQ_SCHEMA.map((faq) => ({
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
      <Script
        id="workers-comp-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WorkersCompClient />
    </>
  );
}
