"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function ConversionLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Metrology Unit"
            brandIcon="ruler"
            hubPath="/conversion"
            accentColorRgb="99, 102, 241" // indigo-500
            accentSelectionClass="selection:bg-indigo-500/30"
            navLinks={[
                { label: "METROLOGY HUB", href: "/conversion" },
                { label: "AUDIT ENGINE", href: "/conversion/calculator" },
                { label: "EXPERT GUIDE", href: "/conversion#faq" },
            ]}
            trustScore="4.9/5 NIST Verified"
        >
            {children}
        </FlagshipLayout>
    );
}
