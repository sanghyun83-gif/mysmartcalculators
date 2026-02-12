"use client";

import { FlagshipLayout } from "@/components/v3/FlagshipLayout";
import { Baby } from "lucide-react";

export default function DueDateLayout({ children }: { children: React.ReactNode }) {
    return (
        <FlagshipLayout
            brandName="Due Date Auditor"
            brandIcon={Baby}
            hubPath="/due-date"
            accentColorRgb="79, 70, 229"
            accentSelectionClass="selection:bg-indigo-500/30"
            navLinks={[
                { label: "Gestation Engine", href: "/due-date/calculator" },
                { label: "Audit Hub", href: "/due-date#module-0" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
