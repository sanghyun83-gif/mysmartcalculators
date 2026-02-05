import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Student Loan Calculator"
            brandIcon="calculator"
            hubPath="/student-loan"
            accentColorRgb="100, 116, 139"
            accentSelectionClass="selection:bg-slate-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/student-loan/calculator" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}