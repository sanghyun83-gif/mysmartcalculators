"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function BiometHipFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="InjuryAudit AI"
            brandIcon="heart"
            hubPath="/biomet-hip"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/biomet-hip/calculator" },
                { label: "CLAIMS GUIDE", href: "/biomet-hip/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
