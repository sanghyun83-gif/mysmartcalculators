"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function CharitableDonationFlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Donation Auditor"
            brandIcon="gift"
            hubPath="/charitable-donation"
            accentColorRgb="244, 63, 94"
            accentSelectionClass="selection:bg-rose-500/30"
            navLinks={[
                { label: "DEDUCTION CALC", href: "/charitable-donation/calculator" },
                { label: "TAX GUIDE", href: "/charitable-donation/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
