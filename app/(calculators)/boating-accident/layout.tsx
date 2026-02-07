"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function BoatingAccidentFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="InjuryAudit AI"
            brandIcon="anchor"
            hubPath="/boating-accident"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/boating-accident/calculator" },
                { label: "CLAIMS GUIDE", href: "/boating-accident/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
