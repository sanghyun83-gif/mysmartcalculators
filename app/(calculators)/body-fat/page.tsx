import { Metadata } from "next";
import BodyFatClient from "./BodyFatClient";
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
                "name": "Body Fat Calculator Supreme",
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
                "description": "Professional guide for measuring body composition using standard circumference methods.",
                "step": [
                    {
                        "@type": "HowToStep",
                        "text": "Identify your gender and input your current height."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Measure your neck and waist circumference accurately (and hips for females)."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Input these dimensions into the professional calculator."
                    },
                    {
                        "@type": "HowToStep",
                        "text": "Review your results against 2026 health and fitness benchmarks."
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
            <BodyFatClient />
        </>
    );
}
