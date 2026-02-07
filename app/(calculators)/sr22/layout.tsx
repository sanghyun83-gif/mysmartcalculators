import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Sr22 Calculator"
            brandIcon="calculator"
            hubPath="/sr22"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/sr22/calculator" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}