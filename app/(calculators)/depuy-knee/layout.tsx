"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function DePuyKneeFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="InjuryAudit AI"
            brandIcon="heart"
            hubPath="/depuy-knee"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/depuy-knee/calculator" },
                { label: "COMPLICATIONS", href: "/depuy-knee/complications" },
                { label: "PRODUCT LIST", href: "/depuy-knee/products" },
                { label: "CLAIMS GUIDE", href: "/depuy-knee/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
