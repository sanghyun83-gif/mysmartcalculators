import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Waterpark Injury Calculator"
            brandIcon="calculator"
            hubPath="/waterpark-injury"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/waterpark-injury/calculator" },
                { label: "GUIDE", href: "/waterpark-injury/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
