"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function ChemicalBurnFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="InjuryAudit AI"
            brandIcon="flame"
            hubPath="/chemical-burn"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "BURN CALC", href: "/chemical-burn/burn-calculator" },
                { label: "BURN GUIDE", href: "/chemical-burn/burn-guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
