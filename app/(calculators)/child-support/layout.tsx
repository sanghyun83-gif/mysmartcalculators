"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function ChildSupportFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="FamilyAudit AI"
            brandIcon="user"
            hubPath="/child-support"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "SUPPORT CALC", href: "/child-support/child-support" },
                { label: "CUSTODY CALC", href: "/child-support/custody-calculator" },
                { label: "STATE GUIDELINES", href: "/child-support/state-guidelines" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
