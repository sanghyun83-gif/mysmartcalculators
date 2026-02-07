import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Stadium Injury Calculator"
            brandIcon="calculator"
            hubPath="/stadium-injury"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/stadium-injury/calculator" },
                { label: "GUIDE", href: "/stadium-injury/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}