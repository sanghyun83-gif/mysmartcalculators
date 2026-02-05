import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Tax1099FlagshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="TaxAudit AI"
            brandIcon="calculator"
            hubPath="/1099-tax"
            accentColorRgb="16, 185, 129"
            accentSelectionClass="selection:bg-emerald-500/30"
            navLinks={[
                { label: "TAX CALCULATOR", href: "/1099-tax/calculator" },
                { label: "FORM GUIDE", href: "/1099-tax/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
