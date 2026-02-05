import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Trust Tax"
            brandIcon="calculator"
            hubPath="/trust-tax"
            accentColorRgb="16, 185, 129"
            accentSelectionClass="selection:bg-emerald-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/trust-tax/calculator" },
                { label: "GUIDE", href: "/trust-tax/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}