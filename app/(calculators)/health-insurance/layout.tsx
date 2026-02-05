import { FlagshipLayout } from "@/components/v3/FlagshipLayout";
import { Heart } from "lucide-react";

export default function HealthInsuranceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Health Insurance AI"
            brandIcon="heart"
            hubPath="/health-insurance"
            accentColorRgb="37, 99, 235"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[]}
        >
            {children}
        </FlagshipLayout>
    );
}
