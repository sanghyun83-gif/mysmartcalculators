"use client";

import { usePathname } from "next/navigation";
import GlobalHeader from "@/components/v3/GlobalHeader";
import { GlobalFooter } from "@/components/GlobalFooter";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // S-Class Strategy: Centralized Flagship Registry
    const FLAGSHIP_ROUTES = [
        "/truck-accident",
        "/ozempic",
        "/roundup",
        "/401k-growth",
        "/car-accident",
        "/v3-sandbox/truck-flagship"
    ];

    // Auto-detect if current route is governed by a Flagship Layout
    const isFlagshipRoute = FLAGSHIP_ROUTES.some(route => pathname?.startsWith(route));

    return (
        <>
            {!isFlagshipRoute && <GlobalHeader />}
            <main className={`flex-grow ${!isFlagshipRoute ? "pt-16" : ""}`}>
                {children}
            </main>
            {!isFlagshipRoute && <GlobalFooter />}
        </>
    );
}
