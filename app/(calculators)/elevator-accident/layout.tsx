"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function ElevatorAccidentFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Elevator Law AI"
            brandIcon="building-2"
            hubPath="/elevator-accident"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/elevator-accident/calculator" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
