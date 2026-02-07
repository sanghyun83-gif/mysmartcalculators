"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function CapitalGainsFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="TaxAudit AI"
            brandIcon="trending-up"
            hubPath="/capital-gains"
            accentColorRgb="16, 185, 129"
            accentSelectionClass="selection:bg-emerald-500/30"
            navLinks={[
                { label: "GAINS CALC", href: "/capital-gains/gains-calculator" },
                { label: "TAX RATES", href: "/capital-gains/tax-rates-guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
