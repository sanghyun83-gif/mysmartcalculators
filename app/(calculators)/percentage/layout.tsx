"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function PercentageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Percentage Calculator"
            brandIcon="percent"
            hubPath="/percentage"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-100"
            navLinks={[]}
            trustScore="Verified by NIST + BLS 2026"
            lightMode={true}
        >
            {children}
        </FlagshipLayout>
    );
}
