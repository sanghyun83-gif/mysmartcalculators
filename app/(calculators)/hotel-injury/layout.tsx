import { FlagshipLayout } from "@/components/v3/FlagshipLayout";
import { Hotel } from "lucide-react";

export default function HotelInjuryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Hotel Injury AI"
            brandIcon="hotel"
            hubPath="/hotel-injury"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[]}
        >
            {children}
        </FlagshipLayout>
    );
}
