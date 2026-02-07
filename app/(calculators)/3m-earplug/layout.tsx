"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Earplug3MFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="EarplugAudit AI"
            brandIcon="ear"
            hubPath="/3m-earplug"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/3m-earplug/calculator" },
                { label: "ELIGIBILITY", href: "/3m-earplug/eligibility" },
                { label: "CLAIMS GUIDE", href: "/3m-earplug/guide" },
                { label: "TIMELINE", href: "/3m-earplug/timeline" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
