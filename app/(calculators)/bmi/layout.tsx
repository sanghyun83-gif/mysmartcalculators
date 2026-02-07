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
            brandName="BMIMaster AI"
            brandIcon="activity"
            hubPath="/bmi"
            accentColorRgb="34, 197, 94" // green-500
            accentSelectionClass="selection:bg-green-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/bmi/calculator" },
                { label: "HEALTH GUIDE", href: "/bmi/health-guide" },
            ]}
            trustScore="4.9/5 TrustScore"
        >
            {children}
        </FlagshipLayout>
    );
}
