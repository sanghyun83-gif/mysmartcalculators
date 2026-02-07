"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function EarthquakeInsuranceFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Quake Shield AI"
            brandIcon="mountain"
            hubPath="/earthquake-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "QUAKE CALC", href: "/earthquake-insurance/calculator" },
                { label: "COVERAGE GUIDE", href: "/earthquake-insurance/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
