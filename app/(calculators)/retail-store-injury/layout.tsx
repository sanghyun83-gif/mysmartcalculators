import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Retail Store Injury Calculator"
            brandIcon="calculator"
            hubPath="/retail-store-injury"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/retail-store-injury/calculator" },
                { label: "GUIDE", href: "/retail-store-injury/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
