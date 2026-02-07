"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function GadoliniumFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Contrast Safety AI"
            brandIcon="heart"
            hubPath="/gadolinium"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/gadolinium/calculator" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
