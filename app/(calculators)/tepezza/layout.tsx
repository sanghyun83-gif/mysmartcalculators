import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Tepezza Calculator"
            brandIcon="calculator"
            hubPath="/tepezza"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/tepezza/calculator" },
                { label: "GUIDE", href: "/tepezza/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}