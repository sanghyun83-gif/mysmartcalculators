"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function ArtInsuranceFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="ArtAudit AI"
            brandIcon="palette"
            hubPath="/art-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "PREMIUM CALC", href: "/art-insurance/calculator" },
                { label: "COVERAGE GUIDE", href: "/art-insurance/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
