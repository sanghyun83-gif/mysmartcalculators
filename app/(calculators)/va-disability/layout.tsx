"use client";

import { Shield } from "lucide-react";
import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function VADisabilityFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="VADisabilityMaster AI"
            brandIcon="shield"
            hubPath="/va-disability"
            accentColorRgb="20, 184, 166" // teal-500
            accentSelectionClass="selection:bg-teal-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/va-disability/va-calculator" },
                { label: "RATING GUIDE", href: "/va-disability/rating-guide" },
            ]}
            trustScore="4.9/5 TrustScore"
        >
            {children}
        </FlagshipLayout>
    );
}
