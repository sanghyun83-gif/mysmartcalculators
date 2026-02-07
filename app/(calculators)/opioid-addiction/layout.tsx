import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Opioid Addiction Calculator"
            brandIcon="calculator"
            hubPath="/opioid-addiction"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/opioid-addiction/calculator" },
                { label: "GUIDE", href: "/opioid-addiction/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}