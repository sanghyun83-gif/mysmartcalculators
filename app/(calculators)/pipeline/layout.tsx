import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Pipeline Calculator"
            brandIcon="calculator"
            hubPath="/pipeline"
            accentColorRgb="100, 116, 139"
            accentSelectionClass="selection:bg-slate-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/pipeline/calculator" },
                { label: "GUIDE", href: "/pipeline/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}