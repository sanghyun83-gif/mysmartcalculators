import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Restaurant Injury Calculator"
            brandIcon="calculator"
            hubPath="/restaurant-injury"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/restaurant-injury/calculator" },
                { label: "GUIDE", href: "/restaurant-injury/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
