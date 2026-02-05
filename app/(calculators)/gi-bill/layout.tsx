"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function GIBillFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Veteran Benefits AI"
            brandIcon="graduation-cap"
            hubPath="/gi-bill"
            accentColorRgb="16, 185, 129"
            accentSelectionClass="selection:bg-emerald-500/30"
            navLinks={[
                { label: "BENEFITS CALC", href: "/gi-bill/calculator" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
