import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Windstorm Insurance"
            brandIcon="calculator"
            hubPath="/windstorm-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/windstorm-insurance/calculator" },
                { label: "GUIDE", href: "/windstorm-insurance/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}