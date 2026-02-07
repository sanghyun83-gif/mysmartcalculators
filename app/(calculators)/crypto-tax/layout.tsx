"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function CryptoTaxFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="AssetAudit AI"
            brandIcon="coins"
            hubPath="/crypto-tax"
            accentColorRgb="16, 185, 129"
            accentSelectionClass="selection:bg-emerald-500/30"
            navLinks={[
                { label: "TAX CALC", href: "/crypto-tax/crypto-calculator" },
                { label: "TAX GUIDE", href: "/crypto-tax/tax-guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
