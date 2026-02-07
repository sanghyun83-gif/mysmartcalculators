"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function FirefighterFoamFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="AFFF Justice AI"
            brandIcon="flame"
            hubPath="/firefighter-foam"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/firefighter-foam/calculator" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
