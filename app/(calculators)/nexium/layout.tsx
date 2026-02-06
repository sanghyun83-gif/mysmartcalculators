import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Nexium Calculator"
            brandIcon="calculator"
            hubPath="/nexium"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/nexium/calculator" },
                { label: "GUIDE", href: "/nexium/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
