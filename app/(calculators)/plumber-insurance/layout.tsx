import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Plumber Insurance"
            brandIcon="calculator"
            hubPath="/plumber-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/plumber-insurance/calculator" },
                { label: "GUIDE", href: "/plumber-insurance/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}