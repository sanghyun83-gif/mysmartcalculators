"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function BoneGraftFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="InjuryAudit AI"
            brandIcon="heart"
            hubPath="/bone-graft"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/bone-graft/calculator" },
                { label: "CLAIMS GUIDE", href: "/bone-graft/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
