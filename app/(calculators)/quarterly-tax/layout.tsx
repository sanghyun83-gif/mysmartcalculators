import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Quarterly Tax"
            brandIcon="calculator"
            hubPath="/quarterly-tax"
            accentColorRgb="16, 185, 129"
            accentSelectionClass="selection:bg-emerald-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/quarterly-tax/calculator" },
                { label: "GUIDE", href: "/quarterly-tax/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}