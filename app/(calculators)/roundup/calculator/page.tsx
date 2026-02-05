import { Metadata } from "next";
import { Gavel } from "lucide-react";
import { FlagshipLayout } from "@/components/v3/FlagshipLayout";
import { CalculatorClient } from "./CalculatorClient";

export const metadata: Metadata = {
    title: "Roundup Settlement Calculator | Case Value Audit",
    description: "Calculate your potential Roundup Lawsuit settlement value. Specialized analysis for Non-Hodgkin Lymphoma (NHL) claims.",
};

export default function RoundupCalculatorPage() {
    return <CalculatorClient />;
}
