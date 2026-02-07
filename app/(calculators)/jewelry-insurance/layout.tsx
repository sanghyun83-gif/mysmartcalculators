import { FlagshipLayout } from "@/components/v3/FlagshipLayout";


export default function JewelryInsuranceLayout({
    children }: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Jewelry Insurance"
            brandIcon="gem"
            hubPath="/jewelry-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "Calculator", href: "/jewelry-insurance/calculator" },
                { label: "Guide", href: "/jewelry-insurance/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
