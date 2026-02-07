"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function DirtBikeInsuranceFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="PolicyAudit AI"
            brandIcon="bike"
            hubPath="/dirt-bike-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "PREMIUM CALC", href: "/dirt-bike-insurance/calculator" },
                { label: "COVERAGE GUIDE", href: "/dirt-bike-insurance/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
