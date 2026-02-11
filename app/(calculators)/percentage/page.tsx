import { getCalculatorMeta } from "@/lib/registry/calculators";
import { SITE, CALCULATORS } from "@/lib/calculators/percentage";
import dynamic from "next/dynamic";

const id = "percentage";
const meta = getCalculatorMeta(id);
const percentageCalc = CALCULATORS.find(c => c.id === "percentage/calculator");

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

export default function PercentagePage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": percentageCalc?.faqs.map(faq => ({
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
        "applicationCategory": "MathApplication",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "8540"
        },
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
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
            <HubClient />
        </>
    );
}
