"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function DePuyHipFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="InjuryAudit AI"
            brandIcon="heart"
            hubPath="/depuy-hip"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/depuy-hip/calculator" },
                { label: "COMPLICATIONS", href: "/depuy-hip/complications" },
                { label: "PRODUCT LIST", href: "/depuy-hip/products" },
                { label: "CLAIMS GUIDE", href: "/depuy-hip/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
