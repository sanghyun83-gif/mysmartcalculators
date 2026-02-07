"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function CamperInsuranceFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="TaxAudit AI"
            brandIcon="truck"
            hubPath="/camper-insurance"
            accentColorRgb="37, 99, 235"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "PREMIUM CALC", href: "/camper-insurance/calculator" },
                { label: "COVERAGE GUIDE", href: "/camper-insurance/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
