"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function AnnuityFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="YieldAudit AI"
            brandIcon="wallet"
            hubPath="/annuity"
            accentColorRgb="16, 185, 129"
            accentSelectionClass="selection:bg-emerald-500/30"
            navLinks={[
                { label: "PAYOUT CALC", href: "/annuity/calculator" },
                { label: "PAYOUT GUIDE", href: "/annuity/payout-guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
