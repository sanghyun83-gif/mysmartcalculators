"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function FentanylExposureFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Fentanyl Relief AI"
            brandIcon="heart"
            hubPath="/fentanyl-exposure"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "LAWSUIT CALC", href: "/fentanyl-exposure/calculator" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
