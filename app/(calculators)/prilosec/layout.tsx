import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Prilosec Calculator"
            brandIcon="calculator"
            hubPath="/prilosec"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/prilosec/calculator" },
                { label: "GUIDE", href: "/prilosec/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}