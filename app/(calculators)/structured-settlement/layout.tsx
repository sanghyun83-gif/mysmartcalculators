import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Structured Settlement Calculator"
            brandIcon="calculator"
            hubPath="/structured-settlement"
            accentColorRgb="16, 185, 129"
            accentSelectionClass="selection:bg-emerald-500/30"
            navLinks={[
                
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}