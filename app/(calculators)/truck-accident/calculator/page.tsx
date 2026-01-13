import { Metadata } from "next";
import { CalculatorClient } from "./CalculatorClient";

export const metadata: Metadata = {
    title: "Truck Accident Settlement Calculator | Audit Case Now | TruckMaster AI",
    description: "Calculate your potential truck accident settlement using our 2026 AI-powered audit engine. Covers medical bills, lost wages, and pain and suffering.",
    alternates: { canonical: './' }
};

export default function SClassTruckCalculator() {
    return <CalculatorClient />;
}
