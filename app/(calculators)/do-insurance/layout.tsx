"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function DOInsuranceFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="RiskAudit AI"
            brandIcon="building"
            hubPath="/do-insurance"
            accentColorRgb="37, 99, 235"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "PREMIUM CALC", href: "/do-insurance/calculator" },
                { label: "CLAIMS GUIDE", href: "/do-insurance/claims" },
                { label: "COMPANY TYPES", href: "/do-insurance/company-types" },
                { label: "COVERAGE GUIDE", href: "/do-insurance/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
