"use client";

import { Banknote } from "lucide-react";
import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function LoanPayoffFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="LoanPayoffMaster AI"
            brandIcon="banknote"
            hubPath="/loan-payoff"
            accentColorRgb="34, 197, 94" // green-500
            accentSelectionClass="selection:bg-green-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/loan-payoff/loan-calculator" },
                { label: "PAYOFF GUIDE", href: "/loan-payoff/payoff-guide" },
            ]}
            trustScore="4.9/5 TrustScore"
        >
            {children}
        </FlagshipLayout>
    );
}
