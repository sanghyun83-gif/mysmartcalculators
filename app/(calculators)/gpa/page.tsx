import { SITE, CALCULATORS } from "@/lib/calculators/gpa";
import GpaClient from "./GpaClient";

export const metadata = {
    title: "2026 GPA Calculator | Weighted & Unweighted Precision Engine",
    description: "Calculate your GPA with 2026 academic precision. Free audit tool for high school, college, and AP/IB weighting. Expert guide and institutional benchmarks.",
    alternates: { canonical: SITE.baseUrl }
};

export default function GPAPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": SITE.name,
                "operatingSystem": "All",
                "applicationCategory": "EducationalApplication",
                "description": "High-precision academic auditor for weighted and unweighted GPA calculations.",
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                },
                "featureList": [
                    "Unweighted 4.0 Scale Calculation",
                    "Weighted AP/IB/Honors Support",
                    "Multiple Course Manifest Tracking",
                    "High-Precision Academic Auditing"
                ]
            },
            {
                "@type": "HowTo",
                "name": "How to Calculate Your GPA",
                "description": "Professional guide for calculating weighted and unweighted GPA with institutional precision.",
                "step": [
                    {
                        "@type": "HowToStep",
                        "text": "Select your grading scale (Unweighted 4.0 or Weighted 5.0)."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Input your letter grade (A-F) for each course completed."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Specify the credit hours (1-5) and weighting level (Honors/AP/IB) if applicable."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Execute the audit to view your institutional-grade cumulative GPA."
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
                        "name": "GPA Calculator",
                        "item": "https://mysmartcalculators.com/gpa"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": CALCULATORS[0].faqs.map(faq => ({
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
                suppressHydrationWarning
            />
            <GpaClient />
        </>
    );
}

