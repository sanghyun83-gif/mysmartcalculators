import { Metadata } from "next";
import CalculatorClient from "./CalculatorClient";

export const metadata: Metadata = {
    title: "Binary Logic Engine & Bitwise Auditor | 2026 S-Class",
    description: "Execute precision bitwise operations and base conversions with institutional hardware-level accuracy. Optimized for 64-bit architecture.",
    alternates: {
        canonical: "https://mysmartcalculators.com/binary/calculator"
    }
};

export default function BinaryCalculatorPage() {
    return <CalculatorClient />;
}
