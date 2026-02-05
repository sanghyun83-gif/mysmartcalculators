"use client";

import { PawPrint } from "lucide-react";
import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function PetInsuranceFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="PetInsuranceMaster AI"
            brandIcon="paw"
            hubPath="/pet-insurance"
            accentColorRgb="251, 146, 60" // orange-400
            accentSelectionClass="selection:bg-orange-400/30"
            navLinks={[
                { label: "CALCULATOR", href: "/pet-insurance/pet-calculator" },
                { label: "COVERAGE GUIDE", href: "/pet-insurance/coverage-guide" },
            ]}
            trustScore="4.9/5 TrustScore"
        >
            {children}
        </FlagshipLayout>
    );
}
