"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function CasinoInjuryFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Casino Injury Auditor"
            brandIcon="sparkles"
            hubPath="/casino-injury"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/casino-injury/calculator" },
                { label: "CLAIMS GUIDE", href: "/casino-injury/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
