"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function EstateTaxFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Estate Shield AI"
            brandIcon="scale"
            hubPath="/estate-tax"
            accentColorRgb="16, 185, 129"
            accentSelectionClass="selection:bg-emerald-500/30"
            navLinks={[
                { label: "ESTATE CALC", href: "/estate-tax/estate-calculator" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
