"use client";

import { GraduationCap } from "lucide-react";
import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function GPALayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="GPAMaster AI"
            brandIcon="graduation-cap"
            hubPath="/gpa"
            accentColorRgb="79, 70, 229" // indigo-600
            accentSelectionClass="selection:bg-indigo-500/30"
            navLinks={[
                { label: "GPA ENGINE", href: "/gpa/calculator" },
                { label: "ACADEMY HUB", href: "/gpa" },
            ]}
            trustScore="4.9/5 Scholar Rating"
        >
            {children}
        </FlagshipLayout>
    );
}
