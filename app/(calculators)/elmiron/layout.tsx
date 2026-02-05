"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function ElmironFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Elmiron Law AI"
            brandIcon="eye"
            hubPath="/elmiron"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/elmiron/calculator" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
