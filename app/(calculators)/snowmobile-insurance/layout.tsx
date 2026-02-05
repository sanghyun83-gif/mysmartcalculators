import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Snowmobile Insurance"
            brandIcon="calculator"
            hubPath="/snowmobile-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/snowmobile-insurance/calculator" },
                { label: "GUIDE", href: "/snowmobile-insurance/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}