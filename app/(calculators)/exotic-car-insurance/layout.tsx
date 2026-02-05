"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function ExoticCarInsuranceFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="supercar shield ai"
            brandIcon="car"
            hubPath="/exotic-car-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "PREMIUM CALC", href: "/exotic-car-insurance/calculator" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
