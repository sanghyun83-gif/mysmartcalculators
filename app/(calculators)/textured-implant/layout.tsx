import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Textured Implant Calculator"
            brandIcon="calculator"
            hubPath="/textured-implant"
            accentColorRgb="100, 116, 139"
            accentSelectionClass="selection:bg-slate-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/textured-implant/calculator" },
                { label: "GUIDE", href: "/textured-implant/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
