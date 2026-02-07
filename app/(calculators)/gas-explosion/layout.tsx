"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function GasExplosionFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Gas Safety AI"
            brandIcon="flame"
            hubPath="/gas-explosion"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/gas-explosion/gas-calculator" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
