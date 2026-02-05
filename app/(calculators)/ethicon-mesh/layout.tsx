"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function EthiconMeshFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Mesh Claim AI"
            brandIcon="heart"
            hubPath="/ethicon-mesh"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/ethicon-mesh/calculator" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
