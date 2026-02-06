import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Snap"
            brandIcon="calculator"
            hubPath="/snap"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/snap/calculator" },
                { label: "GUIDE", href: "/snap/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
