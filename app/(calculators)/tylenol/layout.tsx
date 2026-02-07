import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Tylenol Calculator"
            brandIcon="calculator"
            hubPath="/tylenol"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/tylenol/calculator" },
                { label: "GUIDE", href: "/tylenol/guide" },
                { label: "ELIGIBILITY", href: "/tylenol/eligibility" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}