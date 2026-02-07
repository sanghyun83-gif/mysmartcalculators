"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function CrossfitInjuryFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="InjuryAudit AI"
            brandIcon="flame"
            hubPath="/crossfit-injury"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/crossfit-injury/calculator" },
                { label: "CLAIMS GUIDE", href: "/crossfit-injury/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
