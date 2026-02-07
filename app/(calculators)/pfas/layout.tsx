import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Pfas Calculator"
            brandIcon="calculator"
            hubPath="/pfas"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/pfas/calculator" },
                { label: "GUIDE", href: "/pfas/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}