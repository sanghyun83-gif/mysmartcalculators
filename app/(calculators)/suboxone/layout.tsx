import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Suboxone Calculator"
            brandIcon="calculator"
            hubPath="/suboxone"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/suboxone/calculator" },
                { label: "GUIDE", href: "/suboxone/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}