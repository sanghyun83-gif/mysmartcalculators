"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function AutoInsuranceFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="PolicyAudit AI"
            brandIcon="car"
            hubPath="/auto-insurance"
            accentColorRgb="37, 99, 235"
            accentSelectionClass="selection:bg-blue-600/30"
            navLinks={[
                { label: "PREMIUM CALC", href: "/auto-insurance/calculator" },
                { label: "BY STATE", href: "/auto-insurance/by-state" },
                { label: "BY AGE", href: "/auto-insurance/by-age" },
                { label: "COVERAGE GUIDE", href: "/auto-insurance/coverage-types" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
