import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Nonprofit Insurance"
            brandIcon="calculator"
            hubPath="/nonprofit-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/nonprofit-insurance/calculator" },
                { label: "GUIDE", href: "/nonprofit-insurance/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}