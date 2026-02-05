"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function GroceryStoreInjuryFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Retail Safety AI"
            brandIcon="shopping-cart"
            hubPath="/grocery-store-injury"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/grocery-store-injury/calculator" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
