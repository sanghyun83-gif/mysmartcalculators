import React from "react";
import { FlagshipLayout } from "@/components/v3/FlagshipLayout";


export default function MotorcycleAccidentLayout({
    children }: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Motorcycle Pro"
            brandIcon="bike"
            hubPath="/motorcycle-accident"
            accentColorRgb="249, 115, 22"
            accentSelectionClass="selection:bg-orange-500/30"
            navLinks={[
                { label: "Settlement Calc", href: "/motorcycle-accident/motorcycle-settlement" },
                { label: "Injury Types", href: "/motorcycle-accident/injury-types" },
                { label: "Bike Damage", href: "/motorcycle-accident/bike-damage" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
