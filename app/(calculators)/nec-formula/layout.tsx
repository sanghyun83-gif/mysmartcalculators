import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Nec Formula Calculator"
            brandIcon="calculator"
            hubPath="/nec-formula"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/nec-formula/calculator" },
                { label: "GUIDE", href: "/nec-formula/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}