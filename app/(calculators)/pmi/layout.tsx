"use client";

import { Percent } from "lucide-react";
import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function PMIFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="PMIMaster AI"
            brandIcon="percent"
            hubPath="/pmi"
            accentColorRgb="16, 185, 129" // emerald-500
            accentSelectionClass="selection:bg-emerald-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/pmi/calculator" },
                { label: "GUIDE", href: "/pmi/guide" },
            ]}
            trustScore="4.9/5 TrustScore"
        >
            {children}
        </FlagshipLayout>
    );
}
