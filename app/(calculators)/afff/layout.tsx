"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function AfffFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="JusticeAudit AI"
            brandIcon="droplets"
            hubPath="/afff"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/afff/calculator" },
                { label: "DEFENDANTS", href: "/afff/defendants" },
                { label: "ELIGIBILITY", href: "/afff/eligibility" },
                { label: "CLAIMS GUIDE", href: "/afff/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
