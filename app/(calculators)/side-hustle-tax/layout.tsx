import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Side Hustle Tax"
            brandIcon="calculator"
            hubPath="/side-hustle-tax"
            accentColorRgb="16, 185, 129"
            accentSelectionClass="selection:bg-emerald-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/side-hustle-tax/calculator" },
                { label: "GUIDE", href: "/side-hustle-tax/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}