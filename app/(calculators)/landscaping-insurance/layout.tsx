import { FlagshipLayout } from "@/components/v3/FlagshipLayout";


export default function LandscapingInsuranceLayout({
    children }: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Landscaping Insurance"
            brandIcon="trees"
            hubPath="/landscaping-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "Calculator", href: "/landscaping-insurance/calculator" },
                { label: "Guide", href: "/landscaping-insurance/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
