import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Salon Insurance"
            brandIcon="calculator"
            hubPath="/salon-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/salon-insurance/calculator" },
                { label: "GUIDE", href: "/salon-insurance/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}