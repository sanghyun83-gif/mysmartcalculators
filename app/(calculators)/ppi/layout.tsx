import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Ppi Calculator"
            brandIcon="calculator"
            hubPath="/ppi"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/ppi/calculator" },
                { label: "GUIDE", href: "/ppi/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
