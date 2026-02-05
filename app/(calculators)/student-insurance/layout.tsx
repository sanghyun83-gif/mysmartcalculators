import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Student Insurance"
            brandIcon="calculator"
            hubPath="/student-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/student-insurance/calculator" },
                { label: "GUIDE", href: "/student-insurance/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}