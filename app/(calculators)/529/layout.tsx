"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Plan529FlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="CollegeAudit AI"
            brandIcon="graduation-cap"
            hubPath="/529"
            accentColorRgb="16, 185, 129"
            accentSelectionClass="selection:bg-emerald-500/30"
            navLinks={[
                { label: "529 CALCULATOR", href: "/529/calculator" },
                { label: "STATE BENEFITS", href: "/529/state-benefits" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
