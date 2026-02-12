import React from "react";
import { FlagshipLayout } from "@/components/v3/FlagshipLayout";
import { CALCULATOR_REGISTRY } from "@/lib/registry/calculators";

export default function ScientificLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const config = CALCULATOR_REGISTRY["scientific"];

    return (
        <FlagshipLayout
            brandName="Scientific Logic"
            brandIcon="binary"
            hubPath="/scientific"
            accentColorRgb="37, 99, 235" // blue-600
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "Logic Engine", href: "/scientific/calculator" },
                { label: "Compliance", href: "/scientific#compliance" },
                { label: "Constants", href: "/scientific#physics" },
                { label: "FAQ", href: "/scientific#faq" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
