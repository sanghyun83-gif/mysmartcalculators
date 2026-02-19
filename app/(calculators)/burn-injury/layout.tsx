"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function BurnInjuryFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Burn Injury Auditor"
            brandIcon="flame"
            hubPath="/burn-injury"
            accentColorRgb="249, 115, 22"
            accentSelectionClass="selection:bg-orange-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/burn-injury/calculator" },
                { label: "BURN GUIDE", href: "/burn-injury/burn-guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
