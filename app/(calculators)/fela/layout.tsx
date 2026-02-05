"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function FELALayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="FELA Signal AI"
            brandIcon="train"
            hubPath="/fela"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/fela/calculator" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
