"use client";

import { Heart } from "lucide-react";
import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function AlimonyFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="AlimonyMaster AI"
            brandIcon="heart"
            hubPath="/alimony"
            accentColorRgb="236, 72, 153" // pink-500
            accentSelectionClass="selection:bg-pink-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/alimony/calculator" },
                { label: "STATE LAWS", href: "/alimony/state-laws" },
            ]}
            trustScore="4.9/5 TrustScore"
        >
            {children}
        </FlagshipLayout>
    );
}
