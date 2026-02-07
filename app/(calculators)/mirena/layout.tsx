import React from "react";
import { FlagshipLayout } from "@/components/v3/FlagshipLayout";


export default function MirenaLayout({
    children }: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Mirena Lawsuit"
            brandIcon="heart"
            hubPath="/mirena"
            accentColorRgb="147, 51, 234"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "Calculator", href: "/mirena/calculator" },
                { label: "Claims Guide", href: "/mirena/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
