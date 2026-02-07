"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function DivorceFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="LegalAudit AI"
            brandIcon="scale"
            hubPath="/divorce"
            accentColorRgb="79, 70, 229"
            accentSelectionClass="selection:bg-indigo-500/30"
            navLinks={[
                { label: "ALIMONY CALC", href: "/divorce/alimony-calculator" },
                { label: "PROPERTY DIVISION", href: "/divorce/property-division" },
                { label: "STATE LAWS", href: "/divorce/state-laws" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
