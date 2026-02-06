import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Travel Insurance"
            brandIcon="calculator"
            hubPath="/travel-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/travel-insurance/calculator" },
                { label: "GUIDE", href: "/travel-insurance/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
