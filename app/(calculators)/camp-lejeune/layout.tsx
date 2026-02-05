"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function CampLejeuneFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="InjuryAudit AI"
            brandIcon="droplets"
            hubPath="/camp-lejeune"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/camp-lejeune/lejeune-calculator" },
                { label: "CLAIMS GUIDE", href: "/camp-lejeune/lejeune-guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
