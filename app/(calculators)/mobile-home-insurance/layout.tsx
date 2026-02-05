import React from "react";
import { FlagshipLayout } from "@/components/v3/FlagshipLayout";


export default function MobileHomeInsuranceLayout({
    children }: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Mobile Home Insurance"
            brandIcon="caravan"
            hubPath="/mobile-home-insurance"
            accentColorRgb="37, 99, 235"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "Calculator", href: "/mobile-home-insurance/calculator" },
                { label: "Insurance Guide", href: "/mobile-home-insurance/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
