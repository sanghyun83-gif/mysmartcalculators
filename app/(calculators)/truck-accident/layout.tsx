"use client";

import { Truck } from "lucide-react";
import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function TruckFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="TruckMaster AI"
            brandIcon="truck"
            hubPath="/truck-accident"
            accentColorRgb="239, 68, 68"
            accentSelectionClass="selection:bg-red-500/30"
            navLinks={[
                { label: "BENCHMARKS", href: "/truck-accident#stats" },
                { label: "LEGAL FRAMEWORK", href: "/truck-accident#rules" },
                { label: "CASE INTELLIGENCE", href: "/truck-accident#trinity" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
