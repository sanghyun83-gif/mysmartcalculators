import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Vision Insurance"
            brandIcon="calculator"
            hubPath="/vision-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/vision-insurance/calculator" },
                { label: "GUIDE", href: "/vision-insurance/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
