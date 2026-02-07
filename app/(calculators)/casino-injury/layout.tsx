"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function CasinoInjuryFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="InjuryAudit AI"
            brandIcon="dice"
            hubPath="/casino-injury"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/casino-injury/calculator" },
                { label: "CLAIMS GUIDE", href: "/casino-injury/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
