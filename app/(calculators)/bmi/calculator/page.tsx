import { Metadata } from "next";
import { FlagshipLayout } from "@/components/v3/FlagshipLayout";
import { CalculatorClient } from "./CalculatorClient";
import { Activity } from "lucide-react";

export const metadata: Metadata = {
    title: "BMI Calculator & Biometric Audit | WHO 2026 Standards",
    description: "Calculate your Body Mass Index (BMI) using 2026 clinical standards. Features biometric auditing, metabolic risk analysis, and WHO-aligned healthy range targets.",
    alternates: { canonical: './' }
};

export default function BMICalculatorPage() {
    return (
        <CalculatorClient />
    );
}
