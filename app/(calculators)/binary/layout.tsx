"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function BinaryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Binary Auditor"
            brandIcon="binary"
            hubPath="/binary"
            accentColorRgb="16, 185, 129" // emerald-500
            accentSelectionClass="selection:bg-emerald-500/30"
            navLinks={[
                { label: "LOGIC ENGINE", href: "/binary/calculator" },
                { label: "EXPERT GUIDE", href: "/binary/health-guide" },
                { label: "FAQ", href: "/binary#faq" },
            ]}
            trustScore="4.9/5 TrustScore"
        >
            {children}
        </FlagshipLayout>
    );
}
