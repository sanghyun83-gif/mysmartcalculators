"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function AccutaneFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="InjuryAudit AI"
            brandIcon="heart"
            hubPath="/accutane"
            accentColorRgb="147, 51, 234"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/accutane/calculator" },
                { label: "CLAIMS GUIDE", href: "/accutane/guide" },
                { label: "IBD CONNECTION", href: "/accutane/ibd" },
                { label: "SIDE EFFECTS", href: "/accutane/side-effects" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
