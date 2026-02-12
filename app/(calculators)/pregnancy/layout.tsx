import React from "react";
import { FlagshipLayout } from "@/components/v3/FlagshipLayout";
import { CALCULATOR_REGISTRY } from "@/lib/registry/calculators";

export default function PregnancyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const config = CALCULATOR_REGISTRY["pregnancy"];

    return (
        <FlagshipLayout
            brandName="Pregnancy Genesis"
            brandIcon="baby"
            hubPath="/pregnancy"
            accentColorRgb="244, 63, 94" // rose-500
            accentSelectionClass="selection:bg-rose-500/30"
            navLinks={[
                { label: "Gestation Engine", href: "/pregnancy/calculator" },
                { label: "Bio-Architecture", href: "/pregnancy#compliance" },
                { label: "Genesis Timeline", href: "/pregnancy#stats" },
                { label: "FAQ", href: "/pregnancy#faq" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
