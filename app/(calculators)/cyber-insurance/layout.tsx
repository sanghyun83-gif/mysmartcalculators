"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function CyberInsuranceFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="PolicyAudit AI"
            brandIcon="shield-alert"
            hubPath="/cyber-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "PREMIUM CALC", href: "/cyber-insurance/calculator" },
                { label: "COMMON THREATS", href: "/cyber-insurance/threats" },
                { label: "CLAIMS AUDIT", href: "/cyber-insurance/claims" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
