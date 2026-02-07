"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function ElectricianInsuranceFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Spark Shield AI"
            brandIcon="zap"
            hubPath="/electrician-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "INSURANCE CALC", href: "/electrician-insurance/calculator" },
                { label: "COVERAGE GUIDE", href: "/electrician-insurance/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
