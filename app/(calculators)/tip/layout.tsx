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
            brandName="Gratuity Gold AI"
            brandIcon="dollar-sign"
            hubPath="/tip"
            accentColorRgb="245, 158, 11" // amber-500
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/tip/calculator" },
                { label: "ETIQUETTE HUB", href: "/tip" },
                { label: "GLOBAL STANDARDS", href: "/tip/tipping-guide" },
            ]}
            trustScore="4.9/5 TrustScore"
        >
            {children}
        </FlagshipLayout>
    );
}
