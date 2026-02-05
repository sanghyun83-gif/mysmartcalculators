"use client";

import { FileCheck } from "lucide-react";
import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function SSDIFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="SSDIMaster AI"
            brandIcon="filecheck"
            hubPath="/ssdi"
            accentColorRgb="234, 88, 12" // orange-600
            accentSelectionClass="selection:bg-orange-600/30"
            navLinks={[
                { label: "CALCULATOR", href: "/ssdi/calculator" },
                { label: "BACK PAY GUIDE", href: "/ssdi/back-pay-guide" },
            ]}
            trustScore="4.9/5 TrustScore"
        >
            {children}
        </FlagshipLayout>
    );
}
