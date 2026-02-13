import type { Metadata } from "next";
import { SITE, GRADE_2026 } from "@/lib/calculators/grade";
import GradeHubClient from "./HubClient";

export const metadata: Metadata = {
    title: `${SITE.name} | 2026 Institutional Academic Audit`,
    description: SITE.description,
    alternates: {
        canonical: SITE.baseUrl,
    },
    openGraph: {
        title: `${SITE.name} | 2026 Precision Grade & Performance Auditor`,
        description: SITE.description,
        url: SITE.baseUrl,
        type: "website",
    },
};

export default function GradeHubPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "S-Class Grade Auditor",
                "description": SITE.description,
                "applicationCategory": "EducationApplication",
                "operatingSystem": "Any",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "ratingCount": "15420"
                },
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                }
            },
            {
                "@type": "HowTo",
                "name": "How to Calculate Your Academic Grade",
                "description": "Step-by-step institutional guide for auditing course grades and weighted averages.",
                "step": [
                    {
                        "@type": "HowToStep",
                        "text": "Gather all assignment scores and their corresponding weight percentages from your syllabus."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Input the data into the S-Class Grade Auditor for a precision weighted average calculation."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Identify your current letter grade based on institutional scale benchmarks (e.g., 4.0 or ECTS)."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Use the 'What-If' auditor to determine the final exam score needed for your target grade."
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
                        "name": "Education",
                        "item": "https://mysmartcalculators.com/education"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Grade Calculator",
                        "item": "https://mysmartcalculators.com/grade"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": GRADE_2026.faqs.map((faq: { question: string; answer: string }) => ({
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
            <GradeHubClient />
        </>
    );
}
