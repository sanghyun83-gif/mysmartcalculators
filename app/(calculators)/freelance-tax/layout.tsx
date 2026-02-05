"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function FreelanceTaxFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Freelance Tax Pro"
            brandIcon="laptop"
            hubPath="/freelance-tax"
            accentColorRgb="16, 185, 129"
            accentSelectionClass="selection:bg-emerald-500/30"
            navLinks={[
                { label: "TAX CALC", href: "/freelance-tax/calculator" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
