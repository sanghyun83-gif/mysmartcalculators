"use client";

import { Flame } from "lucide-react";
import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function CalorieFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Calorie Calculator"
            brandIcon="flame"
            hubPath="/calorie"
            accentColorRgb="5, 150, 105" // emerald-600
            accentSelectionClass="selection:bg-emerald-100"
            navLinks={[]}
            trustScore="2026 Metabolic Audit Certified"
            lightMode={true}
        >
            {children}
        </FlagshipLayout>
    );
}
