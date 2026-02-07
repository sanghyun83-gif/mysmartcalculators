import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Trailer Insurance"
            brandIcon="calculator"
            hubPath="/trailer-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/trailer-insurance/calculator" },
                { label: "GUIDE", href: "/trailer-insurance/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}