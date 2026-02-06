import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Shoulder Implant Calculator"
            brandIcon="calculator"
            hubPath="/shoulder-implant"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/shoulder-implant/calculator" },
                { label: "GUIDE", href: "/shoulder-implant/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
