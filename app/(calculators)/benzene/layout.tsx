"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function BenzeneFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="InjuryAudit AI"
            brandIcon="droplets"
            hubPath="/benzene"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/benzene/calculator" },
                { label: "LAWSUIT GUIDE", href: "/benzene/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
