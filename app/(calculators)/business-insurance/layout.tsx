"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function BusinessInsuranceFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="TaxAudit AI"
            brandIcon="briefcase"
            hubPath="/business-insurance"
            accentColorRgb="37, 99, 235"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "PREMIUM CALC", href: "/business-insurance/calculator" },
                { label: "STARTUP GUIDE", href: "/business-insurance/startup" },
                { label: "BUSINESS TYPES", href: "/business-insurance/business-types" },
                { label: "COVERAGE GUIDE", href: "/business-insurance/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
