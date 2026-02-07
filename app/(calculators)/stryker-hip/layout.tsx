import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Stryker Hip Calculator"
            brandIcon="calculator"
            hubPath="/stryker-hip"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/stryker-hip/calculator" },
                { label: "GUIDE", href: "/stryker-hip/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}