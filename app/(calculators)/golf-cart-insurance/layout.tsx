"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function GolfCartInsuranceFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Cart Insurance AI"
            brandIcon="shield-check"
            hubPath="/golf-cart-insurance"
            accentColorRgb="37, 99, 235"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "PREMIUM CALC", href: "/golf-cart-insurance/calculator" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
