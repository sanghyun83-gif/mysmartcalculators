import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Wic"
            brandIcon="calculator"
            hubPath="/wic"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/wic/calculator" },
                { label: "GUIDE", href: "/wic/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}