"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function OvulationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Fertility Audit"
            brandIcon="heart"
            hubPath="/ovulation"
            accentColorRgb="236, 72, 153" // pink-500
            accentSelectionClass="selection:bg-pink-500/30"
            navLinks={[
                { label: "FERTILITY HUB", href: "/ovulation" },
                { label: "AUDIT ENGINE", href: "/ovulation/calculator" },
                { label: "EXPERT GUIDE", href: "/ovulation#faq" },
            ]}
            trustScore="4.9/5 ACOG-193 Verified"
        >
            {children}
        </FlagshipLayout>
    );
}
