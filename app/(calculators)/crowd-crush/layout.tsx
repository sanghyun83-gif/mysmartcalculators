"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function CrowdCrushFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="InjuryAudit AI"
            brandIcon="users"
            hubPath="/crowd-crush"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/crowd-crush/calculator" },
                { label: "CLAIMS GUIDE", href: "/crowd-crush/guide" },
                { label: "CAUSES", href: "/crowd-crush/causes" },
                { label: "PREVENTION", href: "/crowd-crush/prevention" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
