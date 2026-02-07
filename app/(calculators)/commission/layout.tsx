"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function CommissionFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="AssetAudit AI"
            brandIcon="dollar-sign"
            hubPath="/commission"
            accentColorRgb="16, 185, 129"
            accentSelectionClass="selection:bg-emerald-500/30"
            navLinks={[
                { label: "COMMISSION CALC", href: "/commission/calculator" },
                { label: "RATE GUIDE", href: "/commission/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
