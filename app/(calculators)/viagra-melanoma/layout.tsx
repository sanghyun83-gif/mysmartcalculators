import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Viagra Melanoma Calculator"
            brandIcon="calculator"
            hubPath="/viagra-melanoma"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/viagra-melanoma/calculator" },
                { label: "GUIDE", href: "/viagra-melanoma/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
