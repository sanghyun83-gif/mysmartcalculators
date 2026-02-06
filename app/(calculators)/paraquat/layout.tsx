import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Paraquat Calculator"
            brandIcon="calculator"
            hubPath="/paraquat"
            accentColorRgb="100, 116, 139"
            accentSelectionClass="selection:bg-slate-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/paraquat/calculator" },
                { label: "GUIDE", href: "/paraquat/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
