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
        "@type": "SoftwareApplication",
        "name": "S-Class Body Fat Auditor",
        "operatingSystem": "All",
        "applicationCategory": "HealthApplication",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "1840"
        }
    };

    const faqLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": BODY_FAT_2026.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
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
