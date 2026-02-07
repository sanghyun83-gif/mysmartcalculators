import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Valet Accident Calculator"
            brandIcon="calculator"
            hubPath="/valet-accident"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/valet-accident/calculator" },
                { label: "GUIDE", href: "/valet-accident/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}