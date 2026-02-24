"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function BodyFatLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Body Fat Calculator"
            brandIcon="activity"
            hubPath="/body-fat"
            accentColorRgb="5, 150, 105" // emerald-600
            accentSelectionClass="selection:bg-emerald-600/30"
            navLinks={[]}
            trustScore="4.9/5 TrustScore"
            lightMode={true}
        >
            {children}
        </FlagshipLayout>
    );
}
