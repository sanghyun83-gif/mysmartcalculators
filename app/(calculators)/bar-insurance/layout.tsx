"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function BarInsuranceFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="PolicyAudit AI"
            brandIcon="wine"
            hubPath="/bar-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "PREMIUM CALC", href: "/bar-insurance/calculator" },
                { label: "COVERAGE GUIDE", href: "/bar-insurance/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
