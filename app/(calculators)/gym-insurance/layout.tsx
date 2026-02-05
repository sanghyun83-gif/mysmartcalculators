"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function GymInsuranceFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Gym Insurance AI"
            brandIcon="shield"
            hubPath="/gym-insurance"
            accentColorRgb="37, 99, 235"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "PREMIUM CALC", href: "/gym-insurance/calculator" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
