import React from "react";
import { FlagshipLayout } from "@/components/v3/FlagshipLayout";
import { Clock } from "lucide-react";

export const metadata = {
    title: "Date Calculator | 2026 Institutional Audit",
    description: "Calculate time intervals, business days, and temporal deltas with clinical precision.",
};

export default function DateLayout({ children }: { children: React.ReactNode }) {
    return (
        <FlagshipLayout
            brandName="Chronos"
            brandIcon="clock"
            hubPath="/date"
            accentColorRgb="59, 130, 246" // blue-500
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "Temporal Hub", href: "/date" },
                { label: "Audit Engine", href: "/date/calculator" },
                { label: "Expert Guide", href: "/date/health-guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
