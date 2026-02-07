"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function EPLIFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="EPLI Shield AI"
            brandIcon="shield-check"
            hubPath="/epli"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "PREMIUM CALC", href: "/epli/calculator" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
