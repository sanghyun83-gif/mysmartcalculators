import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Spinal Fusion Calculator"
            brandIcon="calculator"
            hubPath="/spinal-fusion"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/spinal-fusion/calculator" },
                { label: "GUIDE", href: "/spinal-fusion/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}