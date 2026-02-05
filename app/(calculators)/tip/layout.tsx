"use client";

import { Coins } from "lucide-react";
import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function TipFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="TipMaster AI"
            brandIcon="coins"
            hubPath="/tip"
            accentColorRgb="168, 85, 247" // purple-500
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/tip/calculator" },
                { label: "TIPPING GUIDE", href: "/tip/tipping-guide" },
            ]}
            trustScore="4.9/5 TrustScore"
        >
            {children}
        </FlagshipLayout>
    );
}
