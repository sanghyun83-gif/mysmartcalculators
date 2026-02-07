"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function FoodPoisoningFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Food Safety AI"
            brandIcon="bug"
            hubPath="/food-poisoning"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/food-poisoning/calculator" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
