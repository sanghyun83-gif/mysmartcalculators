"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function AbilifyFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="InjuryAudit AI"
            brandIcon="heart"
            hubPath="/abilify"
            accentColorRgb="147, 51, 234"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/abilify/calculator" },
                { label: "CLAIMS GUIDE", href: "/abilify/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
