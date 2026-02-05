"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function FluoroquinoloneFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="FQ Justice AI"
            brandIcon="heart"
            hubPath="/fluoroquinolone"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/fluoroquinolone/calculator" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
