"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function FoodStampsFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="SNAP Benefits AI"
            brandIcon="apple"
            hubPath="/food-stamps"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "BENEFIT CALC", href: "/food-stamps/calculator" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
