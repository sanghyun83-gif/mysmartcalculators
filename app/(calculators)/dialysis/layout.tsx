"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function DialysisFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="InjuryAudit AI"
            brandIcon="heart"
            hubPath="/dialysis"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/dialysis/calculator" },
                { label: "CLAIMS GUIDE", href: "/dialysis/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
