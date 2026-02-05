import { FlagshipLayout } from "@/components/v3/FlagshipLayout";
import { Car } from "lucide-react";

export default function HitRunLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Hit and Run AI"
            brandIcon="car"
            hubPath="/hit-and-run"
            accentColorRgb="217, 119, 6"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[]}
        >
            {children}
        </FlagshipLayout>
    );
}
