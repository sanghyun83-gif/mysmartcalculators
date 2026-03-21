import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Tax Calculator"
            brandIcon="calculator"
            hubPath="/tax"
            accentColorRgb="16, 185, 129"
            accentSelectionClass="selection:bg-emerald-100"
            navLinks={[]}
            trustScore="Verified by IRS 2026 Bracket and Filing Rules"
            lightMode={true}
        >
            {children}
        </FlagshipLayout>
    );
}
