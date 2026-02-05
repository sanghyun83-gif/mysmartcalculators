import { FlagshipLayout } from "@/components/v3/FlagshipLayout";


export default function InheritanceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Inheritance Tax"
            brandIcon="landmark"
            hubPath="/inheritance"
            accentColorRgb="16, 185, 129"
            accentSelectionClass="selection:bg-emerald-500/30"
            navLinks={[
                { label: "Calculator", href: "/inheritance/calculator" },
                { label: "Guide", href: "/inheritance/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
