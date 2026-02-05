"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function ClosingCostFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="AssetAudit AI"
            brandIcon="receipt"
            hubPath="/closing-cost"
            accentColorRgb="16, 185, 129"
            accentSelectionClass="selection:bg-emerald-500/30"
            navLinks={[
                { label: "CLOSING CALC", href: "/closing-cost/calculator" },
                { label: "CLOSING GUIDE", href: "/closing-cost/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
