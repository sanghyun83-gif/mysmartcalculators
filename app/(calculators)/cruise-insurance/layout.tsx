"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function CruiseInsuranceFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="PolicyAudit AI"
            brandIcon="ship"
            hubPath="/cruise-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "PREMIUM CALC", href: "/cruise-insurance/calculator" },
                { label: "COVERAGE GUIDE", href: "/cruise-insurance/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
