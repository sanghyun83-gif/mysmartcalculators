import { Metadata } from "next";
import { Home } from "lucide-react";
import { SITE } from "@/lib/calculators/mortgage";

import MortgageCalculatorClient from "./CalculatorClient";

export const metadata: Metadata = {
    title: `Mortgage Calculator - ${SITE.name} ${SITE.year}`,
    description: "Professional mortgage payment calculator. Estimate PITI, PMI, and taxes with actuarial precision.",
};

export default function MortgageCalculatorPage() {
    return <MortgageCalculatorClient />;
}
