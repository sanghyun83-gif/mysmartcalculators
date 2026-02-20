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
            accentColorRgb="22, 163, 74" // green-600
            accentSelectionClass="selection:bg-green-600/30"
            navLinks={[]}
            trustScore="4.9/5 TrustScore"
        >
            {children}
        </FlagshipLayout>
    );
}
