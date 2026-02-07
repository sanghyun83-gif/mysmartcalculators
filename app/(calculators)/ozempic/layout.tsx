"use client";

import { Activity } from "lucide-react";
import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function OzempicFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="OzempicMaster AI"
            brandIcon="activity"
            hubPath="/ozempic"
            accentColorRgb="244, 63, 94" // rose-500
            accentSelectionClass="selection:bg-rose-500/30"
            navLinks={[
                { label: "MDL BENCHMARKS", href: "/ozempic#stats" },
                { label: "LITIGATION TIERS", href: "/ozempic#tiers" },
                { label: "CASE INTELLIGENCE", href: "/ozempic#intelligence" },
            ]}
            trustScore="4.9/5 TrustScore"
        >
            {children}
        </FlagshipLayout>
    );
}
