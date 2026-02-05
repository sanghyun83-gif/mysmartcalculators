"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function AviationFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="InjuryAudit AI"
            brandIcon="plane"
            hubPath="/aviation"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/aviation/calculator" },
                { label: "CLAIMS GUIDE", href: "/aviation/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
