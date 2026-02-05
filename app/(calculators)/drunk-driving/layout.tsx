"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function DrunkDrivingFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="DUI Verdict AI"
            brandIcon="car"
            hubPath="/drunk-driving"
            accentColorRgb="220, 38, 38"
            accentSelectionClass="selection:bg-red-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/drunk-driving/dui-calculator" },
                { label: "DUI GUIDE", href: "/drunk-driving/dui-guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
