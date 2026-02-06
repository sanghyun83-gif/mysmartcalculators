import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Wedding Insurance"
            brandIcon="calculator"
            hubPath="/wedding-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/wedding-insurance/calculator" },
                { label: "GUIDE", href: "/wedding-insurance/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
