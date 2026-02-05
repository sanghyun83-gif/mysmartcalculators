"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function AsbestosFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="InjuryAudit AI"
            brandIcon="activity"
            hubPath="/asbestos"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/asbestos/calculator" },
                { label: "LAWSUIT GUIDE", href: "/asbestos/guide" },
                { label: "DISEASES", href: "/asbestos/diseases" },
                { label: "EXPOSURE SITES", href: "/asbestos/exposure-sites" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
