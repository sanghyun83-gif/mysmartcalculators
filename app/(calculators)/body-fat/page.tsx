import { Metadata } from "next";
import HubClient from "./HubClient";
import { BODY_FAT_2026 } from "@/lib/calculators/body-fat";

export const metadata: Metadata = {
    title: BODY_FAT_2026.metadata.title,
    description: BODY_FAT_2026.metadata.description,
    keywords: BODY_FAT_2026.metadata.keywords,
    alternates: {
        canonical: "https://mysmartcalculators.com/body-fat"
    }
};

export default function BodyFatPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "S-Class Body Fat Auditor",
                "operatingSystem": "All",
                "applicationCategory": "HealthApplication",
                "description": BODY_FAT_2026.metadata.description,
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
                "name": "How to Calculate Body Fat Percentage",
                "description": "Step-by-step institutional guide for measuring body composition using Navy Seal and BMI methods.",
                "step": [
                    {
                        "@type": "HowToStep",
                        "text": "Identify your gender and input your current age and weight."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Measure your height, neck, and waist circumference (and hips for females)."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Input these dimensions into the S-Class auditor for localized fat analysis."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Review your classification against 2026 ACE and WHO health benchmarks."
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
                        "name": "Body Fat Calculator",
                        "item": "https://mysmartcalculators.com/body-fat"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": BODY_FAT_2026.faqs.map(faq => ({
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
