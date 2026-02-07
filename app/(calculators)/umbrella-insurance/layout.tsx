import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Umbrella Insurance Calculator"
            brandIcon="calculator"
            hubPath="/umbrella-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}