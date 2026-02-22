"use client";

import { Activity } from "lucide-react";
import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function BMIFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="BMI Calculator"
            brandIcon="activity"
            hubPath="/bmi"
            accentColorRgb="5, 150, 105" // emerald-600
            accentSelectionClass="selection:bg-green-100"
            navLinks={[]}
            trustScore="2026 Health Standards Certified"
            lightMode={true}
        >
            {children}
        </FlagshipLayout>
    );
}
