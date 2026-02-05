"use client";

import { GraduationCap } from "lucide-react";
import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function FAFSAFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="FAFSAMaster AI"
            brandIcon="building"
            hubPath="/fafsa"
            accentColorRgb="14, 165, 233" // sky-500
            accentSelectionClass="selection:bg-sky-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/fafsa/calculator" },
                { label: "EFC GUIDE", href: "/fafsa/efc-guide" },
            ]}
            trustScore="4.9/5 TrustScore"
        >
            {children}
        </FlagshipLayout>
    );
}
