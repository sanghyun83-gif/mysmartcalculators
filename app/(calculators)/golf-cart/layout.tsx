"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function GolfCartFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Golf Cart Safety AI"
            brandIcon="car"
            hubPath="/golf-cart"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/golf-cart/calculator" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
