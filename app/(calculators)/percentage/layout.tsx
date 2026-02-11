"use client";

import { Percent } from "lucide-react";
import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function PercentageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="PercentMaster"
            brandIcon="percent"
            hubPath="/percentage"
            accentColorRgb="59, 130, 246" // blue-500
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "ENGINE", href: "/percentage/calculator" },
                { label: "HUB", href: "/percentage" },
            ]}
            trustScore="4.9/5 Precision Rating"
        >
            {children}
        </FlagshipLayout>
    );
}
