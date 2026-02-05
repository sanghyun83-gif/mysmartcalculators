"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function AnkleImplantFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="DeviceAudit AI"
            brandIcon="activity"
            hubPath="/ankle-implant"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/ankle-implant/calculator" },
                { label: "CLAIMS GUIDE", href: "/ankle-implant/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
