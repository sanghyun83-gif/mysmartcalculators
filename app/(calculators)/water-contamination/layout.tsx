import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Water Contamination Calculator"
            brandIcon="calculator"
            hubPath="/water-contamination"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/water-contamination/calculator" },
                { label: "GUIDE", href: "/water-contamination/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
