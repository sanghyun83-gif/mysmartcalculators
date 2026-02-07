"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Truck18WheelerFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="TruckLiability AI"
            brandIcon="truck"
            hubPath="/18-wheeler"
            accentColorRgb="239, 68, 68"
            accentSelectionClass="selection:bg-red-500/30"
            navLinks={[
                { label: "SETTLEMENT CALC", href: "/18-wheeler/truck-calculator" },
                { label: "LIABILITY GUIDE", href: "/18-wheeler/truck-guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
