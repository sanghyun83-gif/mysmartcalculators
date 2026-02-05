"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function EBikeFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="E-Bike Law AI"
            brandIcon="bike"
            hubPath="/e-bike"
            accentColorRgb="217, 119, 6"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/e-bike/calculator" },
                { label: "CLAIMS GUIDE", href: "/e-bike/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
