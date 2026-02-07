import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Restaurant Insurance"
            brandIcon="calculator"
            hubPath="/restaurant-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/restaurant-insurance/calculator" },
                { label: "GUIDE", href: "/restaurant-insurance/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}