"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function CommercialVehicleFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="InjuryAudit AI"
            brandIcon="truck"
            hubPath="/commercial-vehicle"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/commercial-vehicle/vehicle-calculator" },
                { label: "LAWSUIT GUIDE", href: "/commercial-vehicle/vehicle-guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
