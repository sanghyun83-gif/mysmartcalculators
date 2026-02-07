"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function BreastImplantFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="InjuryAudit AI"
            brandIcon="heart"
            hubPath="/breast-implant"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/breast-implant/calculator" },
                { label: "ELIGIBILITY", href: "/breast-implant/eligibility" },
                { label: "SYMPTOMS", href: "/breast-implant/symptoms" },
                { label: "CLAIMS GUIDE", href: "/breast-implant/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
