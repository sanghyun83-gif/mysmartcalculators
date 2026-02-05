"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function BardMeshFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="InjuryAudit AI"
            brandIcon="heart"
            hubPath="/bard-mesh"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/bard-mesh/calculator" },
                { label: "COMPLICATIONS", href: "/bard-mesh/complications" },
                { label: "MESH PRODUCTS", href: "/bard-mesh/products" },
                { label: "CLAIMS GUIDE", href: "/bard-mesh/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
