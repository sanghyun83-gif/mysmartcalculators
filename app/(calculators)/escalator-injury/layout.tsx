"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function EscalatorInjuryFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Escalator Law AI"
            brandIcon="arrow-up-down"
            hubPath="/escalator-injury"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/escalator-injury/calculator" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
