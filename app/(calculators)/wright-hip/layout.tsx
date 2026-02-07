import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Wright Hip Calculator"
            brandIcon="calculator"
            hubPath="/wright-hip"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/wright-hip/calculator" },
                { label: "GUIDE", href: "/wright-hip/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}