"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function EOInsuranceFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="E&O Shield AI"
            brandIcon="shield"
            hubPath="/eo-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/eo-insurance/calculator" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
