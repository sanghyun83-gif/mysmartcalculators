"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function CamperInsuranceFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Camper Insurance Auditor"
            brandIcon="compass"
            hubPath="/camper-insurance"
            accentColorRgb="16, 185, 129"
            accentSelectionClass="selection:bg-emerald-500/30"
            navLinks={[
                { label: "PREMIUM CALC", href: "/camper-insurance/calculator" },
                { label: "INSURANCE GUIDE", href: "/camper-insurance/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
