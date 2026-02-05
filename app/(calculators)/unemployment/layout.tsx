"use client";

import { Briefcase } from "lucide-react";
import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function UnemploymentFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="UnemploymentMaster AI"
            brandIcon="briefcase"
            hubPath="/unemployment"
            accentColorRgb="245, 158, 11" // amber-500
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/unemployment/calculator" },
                { label: "ELIGIBILITY GUIDE", href: "/unemployment/eligibility-guide" },
            ]}
            trustScore="4.9/5 TrustScore"
        >
            {children}
        </FlagshipLayout>
    );
}
