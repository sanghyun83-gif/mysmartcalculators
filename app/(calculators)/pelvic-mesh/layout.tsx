import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Pelvic Mesh Calculator"
            brandIcon="calculator"
            hubPath="/pelvic-mesh"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/pelvic-mesh/calculator" },
                { label: "GUIDE", href: "/pelvic-mesh/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
