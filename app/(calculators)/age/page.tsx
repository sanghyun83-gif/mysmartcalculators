import { getCalculatorMeta } from "@/lib/registry/calculators";
import { AGE_2026 } from "@/lib/calculators/age";
import dynamic from "next/dynamic";

const id = "age";
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

export default function AgeHubPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "S-Class Age Auditor",
                "description": meta?.description || "High-precision temporal audit engine for age and life milestone calculation.",
                "applicationCategory": "UtilitiesApplication",
                "operatingSystem": "Any",
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                }
            },
            {
                "@type": "HowTo",
                "name": "How to Calculate Your Precise Age",
                "description": "Step-by-step institutional guide for auditing chronological age and temporal milestones.",
                "step": [
                    {
                        "@type": "HowToStep",
                        "text": "Identify your birth date (Month, Day, Year) and current temporal coordinates."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Input the data into the S-Class auditor to sync with UTC atomic standards."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Review the full breakdown of years, months, days, and celestial zodiac markers."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Analyze your position relative to global life-cycle benchmarks and legal milestones."
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
                        "name": "Health",
                        "item": "https://mysmartcalculators.com/health"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Age Calculator",
                        "item": meta?.canonical || "https://mysmartcalculators.com/age"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": AGE_2026.faqs.map((faq: { question: string; answer: string }) => ({
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
            />
            <HubClient />
        </>
    );
}

