"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function GPALayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="GPA Calculator"
            brandIcon="graduation-cap"
            hubPath="/gpa"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-100"
            navLinks={[]}
            trustScore="Verified by NCES + College Board 2026"
            lightMode={true}
        >
            {children}
        </FlagshipLayout>
    );
}
