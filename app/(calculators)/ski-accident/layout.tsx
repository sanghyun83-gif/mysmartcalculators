import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Ski Accident Calculator"
            brandIcon="calculator"
            hubPath="/ski-accident"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/ski-accident/calculator" },
                { label: "GUIDE", href: "/ski-accident/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
