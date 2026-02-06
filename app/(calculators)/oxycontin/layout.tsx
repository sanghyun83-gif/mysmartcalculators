import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Oxycontin Calculator"
            brandIcon="calculator"
            hubPath="/oxycontin"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/oxycontin/calculator" },
                { label: "GUIDE", href: "/oxycontin/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
