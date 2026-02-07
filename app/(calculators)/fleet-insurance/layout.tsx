"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function FleetInsuranceFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Fleet Pro AI"
            brandIcon="truck"
            hubPath="/fleet-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "PREMIUM CALC", href: "/fleet-insurance/calculator" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
