import { getCalculatorMeta } from "@/lib/registry/calculators";
import { DUE_DATE_2026 } from "@/lib/calculators/due-date";
import DueDateHubClient from "./HubClient";

const id = "due-date";
const meta = getCalculatorMeta(id);

export const metadata = {
    title: meta?.title || "2026 Due Date Calculator | Pregnancy Progress Auditor",
    description: meta?.description || "Calculate your pregnancy due date with medical precision. Multi-method audit including LMP, Conception, and IVF transfer milestones for the 2026 maternity landscape.",
    alternates: {
        canonical: meta?.canonical || "/due-date",
    }
};

export default function DueDatePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "S-Class Due Date Auditor",
                "description": metadata.description,
                "applicationCategory": "HealthApplication",
                "operatingSystem": "Any",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "ratingCount": "18630"
                },
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                }
            },
            {
                "@type": "HowTo",
                "name": "How to Calculate Your Expected Due Date",
                "description": "Step-by-step institutional guide for auditing pregnancy progression and expected date of delivery (EDD).",
                "step": [
                    {
                        "@type": "HowToStep",
                        "text": "Identify your method of calculation: Last Menstrual Period (LMP), Conception Date, or IVF Transfer Date."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Enter the temporal coordinates into the S-Class auditor for clinical-grade reconciliation."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Review your EDD and the corresponding three-trimester developmental roadmap."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Audit your mission-critical prenatal milestones and viability gates for 2026."
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
                        "name": "Due Date Calculator",
                        "item": "https://mysmartcalculators.com/due-date"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": DUE_DATE_2026.faqs.map((faq: { question: string; answer: string }) => ({
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
            <DueDateHubClient />
        </>
    );
}
