"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function DUIFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="JusticeAudit AI"
            brandIcon="scale"
            hubPath="/DUI"
            accentColorRgb="220, 38, 38"
            accentSelectionClass="selection:bg-red-500/30"
            navLinks={[
                { label: "DUI COST CALC", href: "/DUI/dui-cost" },
                { label: "INSURANCE IMPACT", href: "/DUI/dui-insurance" },
                { label: "STATE LAWS", href: "/DUI/dui-comparison" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
