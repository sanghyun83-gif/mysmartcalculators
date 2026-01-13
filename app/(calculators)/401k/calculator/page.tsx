import { Metadata } from "next";
import { CalculatorClient } from "./CalculatorClient";

export const metadata: Metadata = {
    title: "401k Growth Settlement Calculator | Audit Case Now | FinancePro AI",
    description: "Calculate your potential truck accident settlement using our 2026 AI-powered audit engine. Covers medical bills, lost wages, and pain and suffering.",
    alternates: { canonical: './' }
};

export default function SClassTrendingUpCalculator() {
    return <CalculatorClient />;
}
