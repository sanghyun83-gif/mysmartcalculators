"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function CollectibleInsuranceFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="AssetAudit AI"
            brandIcon="trophy"
            hubPath="/collectible-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "PREMIUM CALC", href: "/collectible-insurance/calculator" },
                { label: "COVERAGE GUIDE", href: "/collectible-insurance/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
