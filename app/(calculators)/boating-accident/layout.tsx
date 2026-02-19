"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function BoatingAccidentFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Boating Accident Auditor"
            brandIcon="anchor"
            hubPath="/boating-accident"
            accentColorRgb="239, 68, 68"
            accentSelectionClass="selection:bg-red-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/boating-accident/calculator" },
                { label: "CLAIMS GUIDE", href: "/boating-accident/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
