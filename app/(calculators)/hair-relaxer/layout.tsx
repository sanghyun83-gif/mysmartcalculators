import { FlagshipLayout } from "@/components/v3/FlagshipLayout";
import { Sparkles } from "lucide-react";

export default function HairRelaxerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Hair Relaxer AI"
            brandIcon="sparkles"
            hubPath="/hair-relaxer"
            accentColorRgb="225, 29, 72"
            accentSelectionClass="selection:bg-rose-500/30"
            navLinks={[]}
        >
            {children}
        </FlagshipLayout>
    );
}
