import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Snowboard Injury Calculator"
            brandIcon="calculator"
            hubPath="/snowboard-injury"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/snowboard-injury/calculator" },
                { label: "GUIDE", href: "/snowboard-injury/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}