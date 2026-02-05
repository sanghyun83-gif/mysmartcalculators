import { Metadata } from "next";
import { TrendingUp } from "lucide-react";
import { FlagshipLayout } from "@/components/v3/FlagshipLayout";
import { CalculatorClient } from "./CalculatorClient";

export const metadata: Metadata = {
    title: "401k Growth Calculator | Retirement Wealth Auditor",
    description: "Professional-grade 401k growth and retirement savings analysis. AI-powered projections for retirement scaling.",
};

export default function FinanceCalculatorPage() {
    return <CalculatorClient />;
}
