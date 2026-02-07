"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";
import { Car } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
    const navLinks = [
        { label: "LITIGATION STATS", href: "/car-accident#stats" },
        { label: "INJURY TIERS", href: "/car-accident#tiers" },
        { label: "CASE INTELLIGENCE", href: "/car-accident#intelligence" },
    ];

    return (
        <FlagshipLayout
            brandName="AutoAccident Expert AI"
            brandIcon="car"
            hubPath="/car-accident"
            accentColorRgb="220, 38, 38" // Red-600
            accentSelectionClass="selection:bg-red-500/30"
            navLinks={navLinks}
        >
            {children}
        </FlagshipLayout>
    );
}
