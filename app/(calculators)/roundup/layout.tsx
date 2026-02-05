"use client";

import { Leaf } from "lucide-react";
import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function RoundupFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="RoundupMaster AI"
            brandIcon="leaf"
            hubPath="/roundup"
            accentColorRgb="16, 185, 129" // emerald-500
            accentSelectionClass="selection:bg-emerald-500/30"
            navLinks={[
                { label: "LITIGATION STATS", href: "/roundup#stats" },
                { label: "CANCER TIERS", href: "/roundup#tiers" },
                { label: "CASE INTELLIGENCE", href: "/roundup#intelligence" },
            ]}
            trustScore="4.9/5 TrustScore"
        >
            {children}
        </FlagshipLayout>
    );
}
