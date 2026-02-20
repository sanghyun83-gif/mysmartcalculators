import type { Metadata } from "next";
import { SITE } from "@/lib/calculators/grade";
import CalculatorClient from "./CalculatorClient";

export const metadata: Metadata = {
    title: `${SITE.name} | 2026 Grade Calculator`,
    description: SITE.description,
    alternates: {
        canonical: SITE.baseUrl + "/calculator",
    },
    openGraph: {
        title: `${SITE.name} | Grade & Performance Calculator Engine`,
        description: SITE.description,
        url: SITE.baseUrl + "/calculator",
        type: "website",
    },
};

export default function GradeCalculatorPage() {
    return <CalculatorClient />;
}
