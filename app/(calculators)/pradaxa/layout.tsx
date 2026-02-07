import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Pradaxa Calculator"
            brandIcon="calculator"
            hubPath="/pradaxa"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/pradaxa/calculator" },
                { label: "GUIDE", href: "/pradaxa/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}