import { Metadata } from "next";
import { CalculatorClient } from "./CalculatorClient";

export const metadata: Metadata = {
    title: "Ozempic MDL 3094 Valuation Engine | Precision Settlement Audit",
    description: "Calculate your potential Ozempic settlement using current MDL 3094 tiers. Analyzes Gastroparesis, Intestinal Obstruction, and NAION points.",
    alternates: { canonical: './' }
};

export default function OzempicCalculatorPage() {
    return <CalculatorClient />;
}
