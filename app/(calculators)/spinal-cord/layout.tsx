import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Spinal Cord Calculator"
            brandIcon="calculator"
            hubPath="/spinal-cord"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/spinal-cord/calculator" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}