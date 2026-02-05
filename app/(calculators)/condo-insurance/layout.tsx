"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function CondoInsuranceFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="PolicyAudit AI"
            brandIcon="building"
            hubPath="/condo-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "PREMIUM CALC", href: "/condo-insurance/calculator" },
                { label: "COVERAGE GUIDE", href: "/condo-insurance/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
