"use client";

import { PiggyBank } from "lucide-react";
import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function RothIRAFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="RothIRAMaster AI"
            brandIcon="piggy"
            hubPath="/roth-ira"
            accentColorRgb="139, 92, 246" // violet-500
            accentSelectionClass="selection:bg-violet-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/roth-ira/roth-calculator" },
                { label: "INCOME LIMITS", href: "/roth-ira/income-limits" },
            ]}
            trustScore="4.9/5 TrustScore"
        >
            {children}
        </FlagshipLayout>
    );
}
