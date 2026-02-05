"use client";

import { TrendingUp } from "lucide-react";
import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function FinanceFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="401kMaster AI"
            brandIcon="trending"
            hubPath="/401k-growth"
            accentColorRgb="59, 130, 246" // blue-500
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "GROWTH BENCHMARKS", href: "/401k-growth#stats" },
                { label: "PENSION LOGIC", href: "/401k-growth#logic" },
                { label: "MARKET INTELLIGENCE", href: "/401k-growth#intelligence" },
            ]}
            trustScore="4.9/5 TrustScore"
        >
            {children}
        </FlagshipLayout>
    );
}
