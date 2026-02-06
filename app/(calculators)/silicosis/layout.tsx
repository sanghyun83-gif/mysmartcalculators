import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Silicosis Calculator"
            brandIcon="calculator"
            hubPath="/silicosis"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/silicosis/calculator" },
                { label: "GUIDE", href: "/silicosis/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
