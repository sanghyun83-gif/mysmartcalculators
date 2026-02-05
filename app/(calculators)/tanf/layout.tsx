import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Tanf"
            brandIcon="calculator"
            hubPath="/tanf"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/tanf/calculator" },
                { label: "GUIDE", href: "/tanf/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}