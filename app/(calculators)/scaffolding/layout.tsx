import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Scaffolding Calculator"
            brandIcon="calculator"
            hubPath="/scaffolding"
            accentColorRgb="100, 116, 139"
            accentSelectionClass="selection:bg-slate-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/scaffolding/calculator" },
                { label: "GUIDE", href: "/scaffolding/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
