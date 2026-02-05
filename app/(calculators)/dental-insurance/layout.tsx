"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function DentalInsuranceFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="AssetAudit AI"
            brandIcon="smile"
            hubPath="/dental-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "COVERAGE CALC", href: "/dental-insurance/calculator" },
                { label: "PLAN GUIDE", href: "/dental-insurance/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
