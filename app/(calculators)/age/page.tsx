import { Metadata } from "next";
import { AGE_DATA, SITE } from "@/lib/calculators/age";
import AgeHubClient from "./HubClient";

export const metadata: Metadata = {
    title: "2026 Age Calculator | Precision Chronological & Biological Auditor",
    description: "Calculate your exact age with 2026 precision. Professional-grade auditor for high-resolution aging analysis, longevity benchmarks, and institutional guidelines.",
    alternates: { canonical: SITE.baseUrl }
};

export default function AgeHubPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": AGE_DATA.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    const softwareSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "AgeMaster AI Precision Engine",
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
            "ratingCount": "12450"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
            />

            <AgeHubClient />
        </>
    );
}
