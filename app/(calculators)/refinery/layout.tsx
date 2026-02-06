import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Refinery Calculator"
            brandIcon="calculator"
            hubPath="/refinery"
            accentColorRgb="100, 116, 139"
            accentSelectionClass="selection:bg-slate-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/refinery/calculator" },
                { label: "GUIDE", href: "/refinery/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
