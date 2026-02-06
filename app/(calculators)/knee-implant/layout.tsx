import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function KneeImplantLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Knee Implant Lawsuit"
            brandIcon="?��"
            hubPath="/knee-implant"
            accentColorRgb="147, 51, 234"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "Calculator", href: "/knee-implant/knee-calculator" },
                { label: "Guide", href: "/knee-implant/knee-guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
