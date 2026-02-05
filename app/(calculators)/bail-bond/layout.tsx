"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function BailBondFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="PolicyAudit AI"
            brandIcon="scale"
            hubPath="/bail-bond"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "BAIL CALCULATOR", href: "/bail-bond/bail-calculator" },
                { label: "STATE BAIL LAWS", href: "/bail-bond/state-bail" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
