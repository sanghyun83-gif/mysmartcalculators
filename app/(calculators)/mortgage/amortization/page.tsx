import { Metadata } from "next";
import AmortizationClient from "./AmortizationClient";

export const metadata: Metadata = {
    title: "Mortgage Amortization Schedule | Lifecycle Debt Auditor",
    description: "Generate a complete year-by-year mortgage amortization schedule. Audit your principal reduction and interest trajectory.",
};

export default function AmortizationPage() {
    return <AmortizationClient />;
}
