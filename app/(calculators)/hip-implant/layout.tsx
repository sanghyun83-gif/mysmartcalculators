import { FlagshipLayout } from "@/components/v3/FlagshipLayout";
import { Activity } from "lucide-react";

export default function HipImplantLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Hip Implant AI"
            brandIcon="activity"
            hubPath="/hip-implant"
            accentColorRgb="147, 51, 234"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[]}
        >
            {children}
        </FlagshipLayout>
    );
}
