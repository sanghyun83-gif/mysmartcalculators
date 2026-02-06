import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Townhouse Insurance"
            brandIcon="calculator"
            hubPath="/townhouse-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/townhouse-insurance/calculator" },
                { label: "GUIDE", href: "/townhouse-insurance/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
