import { getCalculatorMeta } from "@/lib/registry/calculators";
import { SALARY_2026 } from "@/lib/calculators/salary";
import dynamic from "next/dynamic";

const id = "salary";
const meta = getCalculatorMeta(id);

export const metadata = {
    title: meta?.title || "Salary Calculator | Precision Compensation Auditor 2026",
    description: meta?.description || "Institutional-grade salary calculator for annual, monthly, and hourly audits. Analyze real earnings with 2026 financial standards.",
    alternates: {
        canonical: `https://mysmartcalculators.com/${id}`,
    }
};

const HubClient = dynamic(
    () => import("./HubClient"),
    {
        ssr: true,
        loading: () => <div className="min-h-screen bg-slate-950" />
    }
);

export default function SalaryPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": meta?.title || "Salary Calculator",
                "description": meta?.description || "Institutional-grade salary and compensation auditor.",
                "applicationCategory": "FinanceApplication",
                "operatingSystem": "Any",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "ratingCount": "12840"
                },
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                }
            },
            {
                "@type": "HowTo",
                "name": "How to Calculate Real Salary Earnings",
                "description": "Step-by-step institutional guide for auditing annual, monthly, and hourly compensation.",
                "step": [
                    {
                        "@type": "HowToStep",
                        "text": "Input your gross annual salary or base hourly rate into the auditor."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Specify the work-week duration (standard 40h or custom) to determine hourly density."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Factor in PTO and seasonal bonuses for a 'Real Value' audit of your time."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Run the 2026 engine to view the full breakdown across all time-horizons."
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
                        "name": "Career",
                        "item": "https://mysmartcalculators.com/career"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Salary Calculator",
                        "item": meta?.canonical || "https://mysmartcalculators.com/salary"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": SALARY_2026.faqs.map(faq => ({
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
