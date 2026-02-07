"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function FoodTruckInsuranceFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Food Truck Pro"
            brandIcon="truck"
            hubPath="/food-truck-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "PREMIUM CALC", href: "/food-truck-insurance/calculator" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
