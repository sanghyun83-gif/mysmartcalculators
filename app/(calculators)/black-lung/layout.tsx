"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function BlackLungFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="InjuryAudit AI"
            brandIcon="stethoscope"
            hubPath="/black-lung"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/black-lung/calculator" },
                { label: "BENEFITS GUIDE", href: "/black-lung/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
