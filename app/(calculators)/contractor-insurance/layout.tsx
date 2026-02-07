"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function ContractorInsuranceFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="AssetAudit AI"
            brandIcon="wrench"
            hubPath="/contractor-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "PREMIUM CALC", href: "/contractor-insurance/calculator" },
                { label: "COVERAGE GUIDE", href: "/contractor-insurance/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
