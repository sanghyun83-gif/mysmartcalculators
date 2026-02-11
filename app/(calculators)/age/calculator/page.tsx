import { Metadata } from "next";
import { CalculatorClient } from "./CalculatorClient";

export const metadata: Metadata = {
    title: "Age Precision Audit Engine | 2026 Chronological Estimator",
    description: "Launch the 2026 Age Precision Engine. Calculate your exact age in years, months, days, minutes, and seconds with institutional accuracy.",
    alternates: { canonical: './' }
};

export default function AgeCalculatorPage() {
    return (
        <CalculatorClient />
    );
}
