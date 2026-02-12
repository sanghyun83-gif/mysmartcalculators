"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function SquareFootageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Property Audit"
            brandIcon="layout"
            hubPath="/square-footage"
            accentColorRgb="16, 185, 129" // emerald-500
            accentSelectionClass="selection:bg-emerald-500/30"
            navLinks={[
                { label: "PROPERTY HUB", href: "/square-footage" },
                { label: "AUDIT ENGINE", href: "/square-footage/calculator" },
                { label: "EXPERT GUIDE", href: "/square-footage#faq" },
            ]}
            trustScore="4.9/5 ANSI Z765 Verified"
        >
            {children}
        </FlagshipLayout>
    );
}
