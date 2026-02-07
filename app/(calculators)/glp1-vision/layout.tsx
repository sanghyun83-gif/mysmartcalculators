"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function GLP1VisionFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="GLP1 Safety AI"
            brandIcon="eye"
            hubPath="/glp1-vision"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/glp1-vision/glp1-calculator" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
