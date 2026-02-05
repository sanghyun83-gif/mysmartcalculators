"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function ForkliftFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Forklift Safety AI"
            brandIcon="truck"
            hubPath="/forklift"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/forklift/calculator" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
