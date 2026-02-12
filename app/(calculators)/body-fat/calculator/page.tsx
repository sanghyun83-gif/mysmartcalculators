import { Metadata } from "next";
import { FlagshipLayout } from "@/components/v3/FlagshipLayout";
import CalculatorClient from "./CalculatorClient";

export const metadata: Metadata = {
    title: "Body Fat Calculator & Biometric Audit | US Navy 2026 Standards",
    description: "Calculate your body fat percentage using 2026 clinical standards and the US Navy method. Features biometric auditing and metabolic risk analysis.",
    alternates: { canonical: "https://mysmartcalculators.com/body-fat/calculator" }
};

export default function BodyFatCalculatorPage() {
    return (
        <CalculatorClient />
    );
}
