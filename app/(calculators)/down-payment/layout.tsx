"use client";

import { Home } from "lucide-react";
import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function DownPaymentFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="DownPaymentMaster AI"
            brandIcon="calculator"
            hubPath="/down-payment"
            accentColorRgb="6, 182, 212" // cyan-500
            accentSelectionClass="selection:bg-cyan-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/down-payment/calculator" },
                { label: "SAVINGS GUIDE", href: "/down-payment/savings-guide" },
            ]}
            trustScore="4.9/5 TrustScore"
        >
            {children}
        </FlagshipLayout>
    );
}
