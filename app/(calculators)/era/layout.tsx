"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function ERAFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="ERA Support AI"
            brandIcon="home"
            hubPath="/era"
            accentColorRgb="37, 99, 235"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "ELIGIBILITY CHECK", href: "/era/calculator" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
