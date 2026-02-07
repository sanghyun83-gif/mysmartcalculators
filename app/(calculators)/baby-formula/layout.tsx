"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function BabyFormulaFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="InjuryAudit AI"
            brandIcon="baby"
            hubPath="/baby-formula"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/baby-formula/calculator" },
                { label: "CLAIMS GUIDE", href: "/baby-formula/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
