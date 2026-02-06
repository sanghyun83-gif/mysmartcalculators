import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Zantac Calculator"
            brandIcon="calculator"
            hubPath="/zantac"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/zantac/calculator" },
                { label: "GUIDE", href: "/zantac/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
