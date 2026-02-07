import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Rental Income"
            brandIcon="calculator"
            hubPath="/rental-income"
            accentColorRgb="16, 185, 129"
            accentSelectionClass="selection:bg-emerald-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/rental-income/calculator" },
                { label: "GUIDE", href: "/rental-income/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}