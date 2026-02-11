import { getCalculatorMeta } from "@/lib/registry/calculators";
import { SITE, CALCULATORS } from "@/lib/calculators/gpa";
import dynamic from "next/dynamic";

// Dynamic import for client components to optimize performance
const HubClient = dynamic(() => import("./HubClient"), { ssr: true });

export const metadata = {
    title: "2026 GPA Calculator | Weighted & Unweighted Precision Engine",
    description: "Calculate your GPA with 2026 academic precision. Free audit tool for high school, college, and AP/IB weighting. Expert guide and institutional benchmarks.",
    alternates: { canonical: SITE.baseUrl }
};

export default function GPAPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": CALCULATORS[0].faqs.map(faq => ({
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
        "name": SITE.name,
        "operatingSystem": "All",
        "applicationCategory": "EducationalApplication",
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
            <HubClient />
        </>
    );
}
