"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function BairHuggerFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="InjuryAudit AI"
            brandIcon="thermometer"
            hubPath="/bair-hugger"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/bair-hugger/calculator" },
                { label: "CLAIMS GUIDE", href: "/bair-hugger/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
