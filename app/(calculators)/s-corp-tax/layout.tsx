import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="S Corp Tax"
            brandIcon="calculator"
            hubPath="/s-corp-tax"
            accentColorRgb="16, 185, 129"
            accentSelectionClass="selection:bg-emerald-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/s-corp-tax/calculator" },
                { label: "GUIDE", href: "/s-corp-tax/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}