"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function EssureFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Essure Claim AI"
            brandIcon="heart"
            hubPath="/essure"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/essure/calculator" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
