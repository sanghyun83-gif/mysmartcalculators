import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Welding Calculator"
            brandIcon="calculator"
            hubPath="/welding"
            accentColorRgb="100, 116, 139"
            accentSelectionClass="selection:bg-slate-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/welding/calculator" },
                { label: "GUIDE", href: "/welding/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}