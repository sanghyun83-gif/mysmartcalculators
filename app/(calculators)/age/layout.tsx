import React from "react";
import { FlagshipLayout } from "@/components/v3/FlagshipLayout";
import { CALCULATOR_REGISTRY } from "@/lib/registry/calculators";

export default function AgeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const config = CALCULATOR_REGISTRY["age"];

    return (
        <FlagshipLayout
            brandName="Age Auditor"
            brandIcon="clock"
            hubPath="/age"
            accentColorRgb="59, 130, 246" // blue-500
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "Chrono-Audit", href: "/age/calculator" },
                { label: "Bioligical vs Chrono", href: "/age#stats" },
                { label: "Legal Norms", href: "/age#compliance" },
                { label: "FAQ", href: "/age#faq" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
