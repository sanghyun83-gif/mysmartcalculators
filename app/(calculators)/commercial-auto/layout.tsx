"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function CommercialAutoFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="AssetAudit AI"
            brandIcon="truck"
            hubPath="/commercial-auto"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "PREMIUM CALC", href: "/commercial-auto/calculator" },
                { label: "COVERAGE GUIDE", href: "/commercial-auto/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
