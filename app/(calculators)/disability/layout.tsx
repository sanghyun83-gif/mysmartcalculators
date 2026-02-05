"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function DisabilityFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="DisabilityAudit AI"
            brandIcon="shield"
            hubPath="/disability"
            accentColorRgb="37, 99, 235"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "SSDI CALCULATOR", href: "/disability/ssdi-calculator" },
                { label: "SSI CALCULATOR", href: "/disability/ssi-calculator" },
                { label: "ELIGIBILITY", href: "/disability/eligibility" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
