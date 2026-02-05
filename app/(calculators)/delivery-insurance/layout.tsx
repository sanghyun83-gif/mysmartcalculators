"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function DeliveryInsuranceFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="PolicyAudit AI"
            brandIcon="package"
            hubPath="/delivery-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "PREMIUM CALC", href: "/delivery-insurance/calculator" },
                { label: "COVERAGE GUIDE", href: "/delivery-insurance/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
