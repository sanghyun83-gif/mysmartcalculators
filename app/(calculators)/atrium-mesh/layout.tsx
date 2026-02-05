"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function AtriumMeshFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="DeviceAudit AI"
            brandIcon="heart"
            hubPath="/atrium-mesh"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/atrium-mesh/calculator" },
                { label: "CLAIMS GUIDE", href: "/atrium-mesh/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
