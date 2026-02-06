import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Testosterone Calculator"
            brandIcon="calculator"
            hubPath="/testosterone"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/testosterone/calculator" },
                { label: "GUIDE", href: "/testosterone/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
