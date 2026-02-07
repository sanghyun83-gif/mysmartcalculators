"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function AntiqueCarInsuranceFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="ClassicAudit AI"
            brandIcon="car"
            hubPath="/antique-car-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "PREMIUM CALC", href: "/antique-car-insurance/calculator" },
                { label: "COVERAGE GUIDE", href: "/antique-car-insurance/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
