import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Risperdal Calculator"
            brandIcon="calculator"
            hubPath="/risperdal"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/risperdal/calculator" },
                { label: "GUIDE", href: "/risperdal/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}