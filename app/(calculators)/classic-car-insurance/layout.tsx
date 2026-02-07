"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function ClassicCarInsuranceFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="AssetAudit AI"
            brandIcon="car"
            hubPath="/classic-car-insurance"
            accentColorRgb="37, 99, 235"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "PREMIUM CALC", href: "/classic-car-insurance/calculator" },
                { label: "COVERAGE GUIDE", href: "/classic-car-insurance/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
