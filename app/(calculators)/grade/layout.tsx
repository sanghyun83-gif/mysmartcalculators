import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function GradeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="GradeMaster AI"
            brandIcon="graduation-cap"
            hubPath="/grade"
            accentColorRgb="16, 185, 129" // emerald-500
            accentSelectionClass="selection:bg-emerald-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/grade/calculator" },
                { label: "GRADE SCALES", href: "/grade/scales" },
                { label: "ACADEMIC HUB", href: "/grade" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
