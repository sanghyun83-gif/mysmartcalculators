"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function ExplosionFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Explosion Law AI"
            brandIcon="zap"
            hubPath="/explosion"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/explosion/calculator" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
