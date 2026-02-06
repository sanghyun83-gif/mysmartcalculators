import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Rsu"
            brandIcon="calculator"
            hubPath="/rsu"
            accentColorRgb="16, 185, 129"
            accentSelectionClass="selection:bg-emerald-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/rsu/calculator" },
                { label: "GUIDE", href: "/rsu/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
