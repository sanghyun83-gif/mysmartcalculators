import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Refinance Calculator"
            brandIcon="calculator"
            hubPath="/refinance"
            accentColorRgb="16, 185, 129"
            accentSelectionClass="selection:bg-emerald-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/refinance/calculator" },
                { label: "GUIDE", href: "/refinance/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
