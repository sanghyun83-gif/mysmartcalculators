import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Toxic Tort Calculator"
            brandIcon="calculator"
            hubPath="/toxic-tort"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/toxic-tort/calculator" },
                { label: "GUIDE", href: "/toxic-tort/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}