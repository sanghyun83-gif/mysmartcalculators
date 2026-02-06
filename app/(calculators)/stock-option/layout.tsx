import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Stock Option"
            brandIcon="calculator"
            hubPath="/stock-option"
            accentColorRgb="16, 185, 129"
            accentSelectionClass="selection:bg-emerald-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/stock-option/calculator" },
                { label: "GUIDE", href: "/stock-option/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
