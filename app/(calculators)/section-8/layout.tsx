import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Section 8"
            brandIcon="calculator"
            hubPath="/section-8"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/section-8/calculator" },
                { label: "GUIDE", href: "/section-8/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}