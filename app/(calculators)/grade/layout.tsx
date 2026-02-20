import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function GradeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Grade Calculator"
            brandIcon="graduation-cap"
            hubPath="/grade"
            accentColorRgb="16, 185, 129" // emerald-500
            accentSelectionClass="selection:bg-emerald-500/30"
            navLinks={[
                { label: "Calculator", href: "/grade/calculator" },
                { label: "Grade Scales", href: "/grade/scales" },
                { label: "Summary", href: "/grade" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
