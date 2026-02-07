"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function DaycareInsuranceFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="PolicyAudit AI"
            brandIcon="baby"
            hubPath="/daycare-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "PREMIUM CALC", href: "/daycare-insurance/calculator" },
                { label: "COVERAGE GUIDE", href: "/daycare-insurance/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
