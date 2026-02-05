import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Offshore Calculator"
            brandIcon="calculator"
            hubPath="/offshore"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/offshore/calculator" },
                { label: "GUIDE", href: "/offshore/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}