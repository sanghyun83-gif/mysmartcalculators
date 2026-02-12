import React from "react";
import { FlagshipLayout } from "@/components/v3/FlagshipLayout";
import { CALCULATOR_REGISTRY } from "@/lib/registry/calculators";

export default function SalaryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const config = CALCULATOR_REGISTRY["salary"];

    return (
        <FlagshipLayout
            brandName="Salary Auditor"
            brandIcon="banknote"
            hubPath="/salary"
            accentColorRgb="5, 150, 105" // emerald-600
            accentSelectionClass="selection:bg-emerald-500/30"
            navLinks={[
                { label: "Salary Engine", href: "/salary/calculator" },
                { label: "Wealth Economics", href: "/salary#compliance" },
                { label: "Market Protocols", href: "/salary#stats" },
                { label: "FAQ", href: "/salary#faq" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
