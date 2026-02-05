"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function DaycareInjuryFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="InjuryAudit AI"
            brandIcon="baby"
            hubPath="/daycare-injury"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/daycare-injury/calculator" },
                { label: "NEGLIGENCE TYPES", href: "/daycare-injury/negligence" },
                { label: "LICENSING LAWS", href: "/daycare-injury/licensing" },
                { label: "CLAIMS GUIDE", href: "/daycare-injury/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
