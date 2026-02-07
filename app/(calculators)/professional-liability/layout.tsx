import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Professional Liability Calculator"
            brandIcon="calculator"
            hubPath="/professional-liability"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/professional-liability/calculator" },
                { label: "GUIDE", href: "/professional-liability/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}