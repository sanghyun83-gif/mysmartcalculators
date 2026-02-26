"use client";

import { usePathname } from "next/navigation";
import GlobalHeader from "@/components/v3/GlobalHeader";
import { GlobalFooter } from "@/components/GlobalFooter";
import { getLayoutShellType } from "@/lib/registry/layout-config";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const shellType = getLayoutShellType(pathname);

    // V5.0 Architectural Shield:
    // If the route is owned by S-Class, LayoutWrapper becomes transparent.
    if (shellType === 'S_CLASS') {
        return <>{children}</>;
    }

    return (
        <>
            <GlobalHeader />
            <main className="flex-grow pt-16">
                {children}
            </main>
            <GlobalFooter />
        </>
    );
}
