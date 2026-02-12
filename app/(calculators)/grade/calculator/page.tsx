import type { Metadata } from "next";
import { SITE } from "@/lib/calculators/grade";
import CalculatorClient from "./CalculatorClient";

export const metadata: Metadata = {
    title: `${SITE.name} | S-Class Academic Audit 2026`,
    description: SITE.description,
    alternates: {
        canonical: SITE.baseUrl + "/calculator",
    },
    openGraph: {
        title: `${SITE.name} | Precision Grade & Performance Audit Internal Engine`,
        description: SITE.description,
        url: SITE.baseUrl + "/calculator",
        type: "website",
    },
};

export default function GradeCalculatorPage() {
    return <CalculatorClient />;
}
