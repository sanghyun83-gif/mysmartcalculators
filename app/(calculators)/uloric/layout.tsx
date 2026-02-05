import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Uloric Calculator"
            brandIcon="calculator"
            hubPath="/uloric"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/uloric/calculator" },
                { label: "GUIDE", href: "/uloric/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}