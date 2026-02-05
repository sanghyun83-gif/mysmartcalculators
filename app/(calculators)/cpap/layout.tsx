"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function CpapFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="InjuryAudit AI"
            brandIcon="wind"
            hubPath="/cpap"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/cpap/calculator" },
                { label: "RECALL GUIDE", href: "/cpap/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
