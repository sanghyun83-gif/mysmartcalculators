import { FlagshipLayout } from "@/components/v3/FlagshipLayout";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <FlagshipLayout
            brandName="Lung Disease Calculator"
            brandIcon="stethoscope"
            hubPath="/lung-disease"
            accentColorRgb="147, 51, 234"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "Calculator", href: "/lung-disease/calculator" },
                { label: "Treatment", href: "/lung-disease/treatment" },
                { label: "Disease Types", href: "/lung-disease/types" },
                { label: "Guide", href: "/lung-disease/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
