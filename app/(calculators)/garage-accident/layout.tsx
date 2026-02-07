"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function GarageAccidentFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Garage Safety AI"
            brandIcon="warehouse"
            hubPath="/garage-accident"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/garage-accident/calculator" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
