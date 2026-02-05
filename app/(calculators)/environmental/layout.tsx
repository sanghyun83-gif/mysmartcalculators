"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function EnvironmentalFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Eco Law AI"
            brandIcon="tree-pine"
            hubPath="/environmental"
            accentColorRgb="16, 185, 129"
            accentSelectionClass="selection:bg-emerald-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/environmental/calculator" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
