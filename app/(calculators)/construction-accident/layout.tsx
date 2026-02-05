"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function ConstructionAccidentFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="InjuryAudit AI"
            brandIcon="hard-hat"
            hubPath="/construction-accident"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/construction-accident/construction-calculator" },
                { label: "CLAIMS GUIDE", href: "/construction-accident/construction-guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
