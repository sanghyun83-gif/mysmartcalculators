"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function CraneFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="InjuryAudit AI"
            brandIcon="construction"
            hubPath="/crane"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/crane/calculator" },
                { label: "CLAIMS GUIDE", href: "/crane/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
