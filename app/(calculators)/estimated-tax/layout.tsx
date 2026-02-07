"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function EstimatedTaxFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Tax Shield AI"
            brandIcon="receipt"
            hubPath="/estimated-tax"
            accentColorRgb="16, 185, 129"
            accentSelectionClass="selection:bg-emerald-500/30"
            navLinks={[
                { label: "TAX CALC", href: "/estimated-tax/calculator" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
