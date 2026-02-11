import { Metadata } from "next";
import { CalculatorClient } from "./CalculatorClient";

export const metadata: Metadata = {
    title: "GPA Precision Audit Engine | 2026 Academic Estimator",
    description: "Launch the 2026 GPA Precision Engine. Calculate unweighted and weighted GPA with course-specific rigor audits and cumulative forecasting.",
    alternates: { canonical: './' }
};

export default function GPACalculatorPage() {
    return (
        <CalculatorClient />
    );
}
