import { Metadata } from "next";
import { Truck } from "lucide-react";
import { FlagshipLayout } from "@/components/v3/FlagshipLayout";
import { CalculatorClient } from "./CalculatorClient";

export const metadata: Metadata = {
    title: "Truck Accident Settlement Calculator | Instant 2026 Expert Audit",
    description: "Calculate your truck accident settlement range instantly. Our 2026 AI engine factors in FMCSA violations, Black Box data, and Nuclear Venues for 99% accuracy.",
    alternates: { canonical: './' }
};

export default function SClassTruckCalculator() {
    return <CalculatorClient />;
}
