import React from "react";
import { FlagshipLayout } from "@/components/v3/FlagshipLayout";


export default function MiningInjuryLayout({
    children }: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Mining Injury"
            brandIcon="pickaxe"
            hubPath="/mining-injury"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "Calculator", href: "/mining-injury/mining-calculator" },
                { label: "Injury Types", href: "/mining-injury/injury-types" },
                { label: "Safety Guide", href: "/mining-injury/mine-safety" },
                { label: "FAQ", href: "/mining-injury/mining-guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
