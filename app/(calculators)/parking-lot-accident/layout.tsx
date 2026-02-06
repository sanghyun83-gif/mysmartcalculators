import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Parking Lot Accident Calculator"
            brandIcon="calculator"
            hubPath="/parking-lot-accident"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/parking-lot-accident/calculator" },
                { label: "GUIDE", href: "/parking-lot-accident/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
