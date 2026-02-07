"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function BirthInjuryFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="InjuryAudit AI"
            brandIcon="baby"
            hubPath="/birth-injury"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/birth-injury/settlement" },
                { label: "INJURY TYPES", href: "/birth-injury/injury-types" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
