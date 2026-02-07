"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function ChildCareSubsidyFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="FamilyAudit AI"
            brandIcon="baby"
            hubPath="/child-care-subsidy"
            accentColorRgb="225, 29, 72"
            accentSelectionClass="selection:bg-rose-500/30"
            navLinks={[
                { label: "SUBSIDY CALC", href: "/child-care-subsidy/calculator" },
                { label: "INCOME LIMITS", href: "/child-care-subsidy/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
