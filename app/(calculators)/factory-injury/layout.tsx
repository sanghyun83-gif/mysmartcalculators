"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function FactoryInjuryFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Factory Safe AI"
            brandIcon="factory"
            hubPath="/factory-injury"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/factory-injury/factory-calculator" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
