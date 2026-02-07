import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Train Accident Calculator"
            brandIcon="calculator"
            hubPath="/train-accident"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/train-accident/calculator" },
                { label: "GUIDE", href: "/train-accident/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}