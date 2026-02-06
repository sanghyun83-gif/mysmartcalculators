import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Transvaginal Mesh Calculator"
            brandIcon="calculator"
            hubPath="/transvaginal-mesh"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/transvaginal-mesh/calculator" },
                { label: "GUIDE", href: "/transvaginal-mesh/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
