import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Subway Accident Calculator"
            brandIcon="calculator"
            hubPath="/subway-accident"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/subway-accident/calculator" },
                { label: "GUIDE", href: "/subway-accident/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
