"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function EventInsuranceFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Event Safe AI"
            brandIcon="party-popper"
            hubPath="/event-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "PREMIUM CALC", href: "/event-insurance/calculator" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
