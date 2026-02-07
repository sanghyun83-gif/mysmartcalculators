import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Roofing Insurance"
            brandIcon="calculator"
            hubPath="/roofing-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/roofing-insurance/calculator" },
                { label: "GUIDE", href: "/roofing-insurance/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}