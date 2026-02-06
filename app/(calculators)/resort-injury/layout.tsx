import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Resort Injury Calculator"
            brandIcon="calculator"
            hubPath="/resort-injury"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/resort-injury/calculator" },
                { label: "GUIDE", href: "/resort-injury/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
