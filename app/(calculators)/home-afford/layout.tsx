import { FlagshipLayout } from "@/components/v3/FlagshipLayout";
import { Home } from "lucide-react";

export default function HomeAffordLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Home Affordability"
            brandIcon="home"
            hubPath="/home-afford"
            accentColorRgb="16, 185, 129"
            accentSelectionClass="selection:bg-emerald-500/30"
            navLinks={[]}
        >
            {children}
        </FlagshipLayout>
    );
}
