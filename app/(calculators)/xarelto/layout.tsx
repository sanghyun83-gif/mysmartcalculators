import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Xarelto Calculator"
            brandIcon="calculator"
            hubPath="/xarelto"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/xarelto/calculator" },
                { label: "GUIDE", href: "/xarelto/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
