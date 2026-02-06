import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Severance Calculator"
            brandIcon="calculator"
            hubPath="/severance"
            accentColorRgb="16, 185, 129"
            accentSelectionClass="selection:bg-emerald-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/severance/calculator" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
