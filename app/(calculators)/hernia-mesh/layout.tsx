import { FlagshipLayout } from "@/components/v3/FlagshipLayout";
import { Activity } from "lucide-react";

export default function HerniaMeshLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Hernia Mesh AI"
            brandIcon="activity"
            hubPath="/hernia-mesh"
            accentColorRgb="217, 119, 6"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[]}
        >
            {children}
        </FlagshipLayout>
    );
}
