import { Metadata } from "next";
import { CalculatorClient } from "./CalculatorClient";

export const metadata: Metadata = {
    title: "Truck Accident Settlement Calculator | 2026 FMCSA Audit Engine",
    description: "Expert 18-wheeler & semi-truck accident settlement calculator. Advanced AI Audit for medical bills, lost wages, and pain & suffering multipliers. Verified FMCSA data.",
    alternates: { canonical: './' }
};

export default function SClassTruckCalculator() {
    return <CalculatorClient />;
}
