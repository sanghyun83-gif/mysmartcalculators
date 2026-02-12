import React from "react";
import { FlagshipLayout } from "@/components/v3/FlagshipLayout";
import { CALCULATOR_REGISTRY } from "@/lib/registry/calculators";

export default function LoanLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const config = CALCULATOR_REGISTRY["loan"];

    return (
        <FlagshipLayout
            brandName="Loan Matrix"
            brandIcon="banknote"
            hubPath="/loan"
            accentColorRgb="79, 70, 229" // indigo-600
            accentSelectionClass="selection:bg-indigo-500/30"
            navLinks={[
                { label: "Loan Engine", href: "/loan/calculator" },
                { label: "Liquidity Science", href: "/loan#stats" },
                { label: "Repayment Mechanics", href: "/loan#compliance" },
                { label: "FAQ", href: "/loan#faq" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
