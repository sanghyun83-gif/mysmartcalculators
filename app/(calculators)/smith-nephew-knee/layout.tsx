import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Smith Nephew Knee Calculator"
            brandIcon="calculator"
            hubPath="/smith-nephew-knee"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/smith-nephew-knee/calculator" },
                { label: "GUIDE", href: "/smith-nephew-knee/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}