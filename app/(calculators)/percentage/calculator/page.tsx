import { Metadata } from "next";
import { CalculatorClient } from "./CalculatorClient";

export const metadata: Metadata = {
    title: "2026 Percentage Calculator Engine | Precision Math Auditor",
    description: "Launch the 2026 Percentage Math Engine. High-precision tools for calculating ratios, growth percentages, and relative differences with NIST clinical accuracy.",
    alternates: { canonical: './' }
};

export default function PercentageCalculatorPage() {
    return (
        <CalculatorClient />
    );
}
