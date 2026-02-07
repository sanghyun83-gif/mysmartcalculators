"use client";

import { Calculator } from "lucide-react";
import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function DTIFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="DTIMaster AI"
            brandIcon="dollar"
            hubPath="/dti"
            accentColorRgb="99, 102, 241" // indigo-500
            accentSelectionClass="selection:bg-indigo-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/dti/calculator" },
                { label: "GUIDE", href: "/dti/guide" },
            ]}
            trustScore="4.9/5 TrustScore"
        >
            {children}
        </FlagshipLayout>
    );
}
