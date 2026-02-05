"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function EScooterFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Scooter Law AI"
            brandIcon="zap"
            hubPath="/e-scooter"
            accentColorRgb="217, 119, 6"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/e-scooter/calculator" },
                { label: "CLAIMS GUIDE", href: "/e-scooter/guide" },
                { label: "COMPANIES", href: "/e-scooter/companies" },
                { label: "INJURY TYPES", href: "/e-scooter/injuries" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
