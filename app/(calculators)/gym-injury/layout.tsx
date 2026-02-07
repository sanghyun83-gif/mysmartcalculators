"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function GymInjuryFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Fitness Safety AI"
            brandIcon="dumbbell"
            hubPath="/gym-injury"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/gym-injury/calculator" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
