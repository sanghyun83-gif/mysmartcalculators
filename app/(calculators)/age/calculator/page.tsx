import { Metadata } from "next";
import { CalculatorClient } from "./CalculatorClient";

export const metadata: Metadata = {
    title: "2026 Age Calculator | Precision Chronological Audit & Milestones",
    description: "Calculate your exact age in years, months, and days with 2026 precision. Track life milestones, zodiac signs, and next birthday countdown with atomic sync accuracy.",
    alternates: { canonical: './' }
};

export default function AgeCalculatorPage() {
    return (
        <CalculatorClient />
    );
}
