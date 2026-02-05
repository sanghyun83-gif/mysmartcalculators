"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function EBTFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="EBT Benefits AI"
            brandIcon="credit-card"
            hubPath="/ebt"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "EBT CALC", href: "/ebt/calculator" },
                { label: "EBT GUIDE", href: "/ebt/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
