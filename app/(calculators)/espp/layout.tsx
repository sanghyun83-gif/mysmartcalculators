"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function ESPPFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="ESPP Optimizer AI"
            brandIcon="trending-up"
            hubPath="/espp"
            accentColorRgb="16, 185, 129"
            accentSelectionClass="selection:bg-emerald-500/30"
            navLinks={[
                { label: "ESPP CALC", href: "/espp/calculator" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
