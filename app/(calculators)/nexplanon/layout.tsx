import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Nexplanon Calculator"
            brandIcon="calculator"
            hubPath="/nexplanon"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/nexplanon/calculator" },
                { label: "GUIDE", href: "/nexplanon/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}