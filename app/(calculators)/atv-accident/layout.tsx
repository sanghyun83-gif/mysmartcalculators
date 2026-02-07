"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function AtvAccidentFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="InjuryAudit AI"
            brandIcon="bike"
            hubPath="/atv-accident"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/atv-accident/calculator" },
                { label: "CLAIMS GUIDE", href: "/atv-accident/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
