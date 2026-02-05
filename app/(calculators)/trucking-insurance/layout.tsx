import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Trucking Insurance"
            brandIcon="calculator"
            hubPath="/trucking-insurance"
            accentColorRgb="100, 116, 139"
            accentSelectionClass="selection:bg-slate-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/trucking-insurance/calculator" },
                { label: "GUIDE", href: "/trucking-insurance/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}