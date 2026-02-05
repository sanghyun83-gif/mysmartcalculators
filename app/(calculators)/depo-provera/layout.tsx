"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function DepoProveraFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="InjuryAudit AI"
            brandIcon="brain"
            hubPath="/depo-provera"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/depo-provera/depo-calculator" },
                { label: "LAWSUIT GUIDE", href: "/depo-provera/depo-guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
