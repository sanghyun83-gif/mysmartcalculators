"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function CharitableDonationFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="TaxAudit AI"
            brandIcon="heart"
            hubPath="/charitable-donation"
            accentColorRgb="16, 185, 129"
            accentSelectionClass="selection:bg-emerald-500/30"
            navLinks={[
                { label: "DEDUCTION CALC", href: "/charitable-donation/calculator" },
                { label: "AGI LIMITS", href: "/charitable-donation/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
