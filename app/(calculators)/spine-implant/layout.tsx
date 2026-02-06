import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Spine Implant Calculator"
            brandIcon="calculator"
            hubPath="/spine-implant"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/spine-implant/calculator" },
                { label: "GUIDE", href: "/spine-implant/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
