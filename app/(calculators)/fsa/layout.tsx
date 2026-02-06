import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Fsa"
            brandIcon="calculator"
            hubPath="/fsa"
            accentColorRgb="16, 185, 129"
            accentSelectionClass="selection:bg-emerald-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/fsa/calculator" },
                { label: "GUIDE", href: "/fsa/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
