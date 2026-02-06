import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Paragard Calculator"
            brandIcon="calculator"
            hubPath="/paragard"
            accentColorRgb="100, 116, 139"
            accentSelectionClass="selection:bg-slate-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/paragard/calculator" },
                { label: "GUIDE", href: "/paragard/guide" },
                { label: "ELIGIBILITY", href: "/paragard/eligibility" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
