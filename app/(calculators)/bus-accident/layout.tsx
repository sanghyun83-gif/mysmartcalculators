"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function BusAccidentFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="InjuryAudit AI"
            brandIcon="bus"
            hubPath="/bus-accident"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/bus-accident/calculator" },
                { label: "LIABILITY RULES", href: "/bus-accident/liability" },
                { label: "BUS TYPES", href: "/bus-accident/types" },
                { label: "CLAIMS GUIDE", href: "/bus-accident/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
