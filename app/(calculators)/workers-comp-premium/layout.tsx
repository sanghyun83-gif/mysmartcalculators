import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Workers Comp Premium Calculator"
            brandIcon="calculator"
            hubPath="/workers-comp-premium"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/workers-comp-premium/calculator" },
                { label: "GUIDE", href: "/workers-comp-premium/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
