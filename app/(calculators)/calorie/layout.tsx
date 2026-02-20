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
            accentColorRgb="249, 115, 22" // orange-500
            accentSelectionClass="selection:bg-orange-500/30"
            navLinks={[]}
            trustScore="4.9/5 TrustScore"
        >
            {children}
        </FlagshipLayout>
    );
}
