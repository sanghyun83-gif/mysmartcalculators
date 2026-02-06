import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="School Injury Calculator"
            brandIcon="calculator"
            hubPath="/school-injury"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/school-injury/calculator" },
                { label: "GUIDE", href: "/school-injury/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
