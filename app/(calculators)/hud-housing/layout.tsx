import { FlagshipLayout } from "@/components/v3/FlagshipLayout";
import { Building2 } from "lucide-react";

export default function HUDLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="HUD Housing AI"
            brandIcon="building-2"
            hubPath="/hud-housing"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[]}
        >
            {children}
        </FlagshipLayout>
    );
}
