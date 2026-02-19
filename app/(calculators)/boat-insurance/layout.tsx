"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function BoatInsuranceFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Boat Insurance Auditor"
            brandIcon="anchor"
            hubPath="/boat-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "PREMIUM CALC", href: "/boat-insurance/boat-calculator" },
                { label: "COVERAGE GUIDE", href: "/boat-insurance/coverage-guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
