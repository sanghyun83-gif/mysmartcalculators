import { Metadata } from "next";
import { CalculatorClient } from "./CalculatorClient";

export const metadata: Metadata = {
    title: "Loan Amortization Calculator | Precision Debt Audit 2026",
    description: "Execute a precision financial audit of your loan. Calculate monthly payments, interest totals, and view complete amortization schedules with sub-cent accuracy.",
    alternates: { canonical: './' }
};

export default function LoanCalculatorPage() {
    return (
        <CalculatorClient />
    );
}
