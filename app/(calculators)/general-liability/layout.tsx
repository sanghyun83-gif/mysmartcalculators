"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function GeneralLiabilityFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Business Safety AI"
            brandIcon="shield"
            hubPath="/general-liability"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "PREMIUM CALC", href: "/general-liability/calculator" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
