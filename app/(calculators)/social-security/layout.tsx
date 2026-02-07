"use client";

import { Landmark } from "lucide-react";
import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function SocialSecurityFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="SocialSecurityMaster AI"
            brandIcon="landmark"
            hubPath="/social-security"
            accentColorRgb="59, 130, 246" // blue-500
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/social-security/ss-calculator" },
                { label: "BENEFITS GUIDE", href: "/social-security/benefits-guide" },
            ]}
            trustScore="4.9/5 TrustScore"
        >
            {children}
        </FlagshipLayout>
    );
}
