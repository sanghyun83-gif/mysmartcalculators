"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function GiftTaxFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Gift Tax Pro"
            brandIcon="gift"
            hubPath="/gift-tax"
            accentColorRgb="16, 185, 129"
            accentSelectionClass="selection:bg-emerald-500/30"
            navLinks={[
                { label: "TAX CALC", href: "/gift-tax/calculator" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
