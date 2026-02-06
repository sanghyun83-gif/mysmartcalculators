import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Rv Insurance"
            brandIcon="calculator"
            hubPath="/rv-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/rv-insurance/calculator" },
                { label: "GUIDE", href: "/rv-insurance/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
