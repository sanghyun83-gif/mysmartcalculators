"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function BodyFatLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Adipose Auditor"
            brandIcon="activity"
            hubPath="/body-fat"
            accentColorRgb="99, 102, 241" // indigo-500
            accentSelectionClass="selection:bg-indigo-500/30"
            navLinks={[
                { label: "AUDIT ENGINE", href: "/body-fat/calculator" },
                { label: "HEALTH GUIDE", href: "/body-fat/health-guide" },
                { label: "FAQ", href: "/body-fat#faq" },
            ]}
            trustScore="4.9/5 TrustScore"
        >
            {children}
        </FlagshipLayout>
    );
}
