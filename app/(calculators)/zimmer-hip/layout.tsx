import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Zimmer Hip Calculator"
            brandIcon="calculator"
            hubPath="/zimmer-hip"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/zimmer-hip/calculator" },
                { label: "GUIDE", href: "/zimmer-hip/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}