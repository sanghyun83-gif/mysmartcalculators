"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function CommercialInsuranceFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="AssetAudit AI"
            brandIcon="building"
            hubPath="/commercial-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "PREMIUM CALC", href: "/commercial-insurance/calculator" },
                { label: "COVERAGE GUIDE", href: "/commercial-insurance/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
