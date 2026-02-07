import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Wage Garnishment Calculator"
            brandIcon="calculator"
            hubPath="/wage-garnishment"
            accentColorRgb="100, 116, 139"
            accentSelectionClass="selection:bg-slate-500/30"
            navLinks={[
                
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}