"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function BonusTaxFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="TaxAudit AI"
            brandIcon="calculator"
            hubPath="/bonus-tax"
            accentColorRgb="16, 185, 129"
            accentSelectionClass="selection:bg-emerald-500/30"
            navLinks={[
                { label: "BONUS CALC", href: "/bonus-tax/calculator" },
                { label: "TAX GUIDE", href: "/bonus-tax/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
