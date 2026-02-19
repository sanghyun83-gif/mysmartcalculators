"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function BoneGraftFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Bone Graft Auditor"
            brandIcon="microscope"
            hubPath="/bone-graft"
            accentColorRgb="20, 184, 166"
            accentSelectionClass="selection:bg-teal-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/bone-graft/calculator" },
                { label: "CLAIMS GUIDE", href: "/bone-graft/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
