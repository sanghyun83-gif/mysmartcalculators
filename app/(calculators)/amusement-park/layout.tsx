"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function AmusementParkFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="InjuryAudit AI"
            brandIcon="ticket"
            hubPath="/amusement-park"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/amusement-park/calculator" },
                { label: "CLAIMS GUIDE", href: "/amusement-park/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
