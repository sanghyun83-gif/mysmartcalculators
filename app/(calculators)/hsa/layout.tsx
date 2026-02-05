import { FlagshipLayout } from "@/components/v3/FlagshipLayout";
import { Heart } from "lucide-react";

export default function HSALayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="HSA Smart AI"
            brandIcon="heart"
            hubPath="/hsa"
            accentColorRgb="34, 197, 94"
            accentSelectionClass="selection:bg-green-500/30"
            navLinks={[]}
        >
            {children}
        </FlagshipLayout>
    );
}
