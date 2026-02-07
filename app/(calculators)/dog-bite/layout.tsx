"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function DogBiteFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="BiteAudit AI"
            brandIcon="dog"
            hubPath="/dog-bite"
            accentColorRgb="217, 119, 6"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/dog-bite/settlement" },
                { label: "BITE SEVERITY", href: "/dog-bite/bite-severity" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
