"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function ElectrocutionFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Shock Law AI"
            brandIcon="zap"
            hubPath="/electrocution"
            accentColorRgb="234, 179, 8"
            accentSelectionClass="selection:bg-yellow-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/electrocution/calculator" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
