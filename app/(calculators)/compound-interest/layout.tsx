"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";
import { SITE } from "@/lib/calculators/compound-interest";
import { TrendingUp } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <FlagshipLayout
            brandName="Compound Wealth"
            brandIcon={TrendingUp}
            hubPath="/compound-interest"
            accentColorRgb="16, 185, 129"
            accentSelectionClass="selection:bg-emerald-500/30"
            navLinks={[
                { label: "Growth Engine", href: "/compound-interest/calculator" },
                { label: "Wealth Audit", href: "/compound-interest#module-0" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
