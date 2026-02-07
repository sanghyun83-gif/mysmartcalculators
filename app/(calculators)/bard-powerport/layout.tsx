"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function BardPowerPortFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="InjuryAudit AI"
            brandIcon="syringe"
            hubPath="/bard-powerport"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/bard-powerport/calculator" },
                { label: "CLAIMS GUIDE", href: "/bard-powerport/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
