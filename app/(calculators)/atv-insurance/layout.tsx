"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function AtvInsuranceFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="PolicyAudit AI"
            brandIcon="bike"
            hubPath="/atv-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "PREMIUM CALC", href: "/atv-insurance/calculator" },
                { label: "COVERAGE GUIDE", href: "/atv-insurance/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
