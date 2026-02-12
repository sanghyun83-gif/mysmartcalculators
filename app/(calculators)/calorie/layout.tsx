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
            brandName="CalorieMaster AI"
            brandIcon="activity"
            hubPath="/calorie"
            accentColorRgb="245, 158, 11" // amber-500
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/calorie/calculator" },
                { label: "NUTRITION GUIDE", href: "/calorie/nutrition-guide" },
            ]}
            trustScore="4.9/5 TrustScore"
        >
            {children}
        </FlagshipLayout>
    );
}
