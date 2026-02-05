import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Oil Rig Calculator"
            brandIcon="calculator"
            hubPath="/oil-rig"
            accentColorRgb="249, 115, 22"
            accentSelectionClass="selection:bg-orange-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/oil-rig/calculator" },
                { label: "GUIDE", href: "/oil-rig/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}