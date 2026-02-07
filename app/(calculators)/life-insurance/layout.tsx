import { FlagshipLayout } from "@/components/v3/FlagshipLayout";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <FlagshipLayout
            brandName="Life Insurance"
            brandIcon="heart"
            hubPath="/life-insurance"
            accentColorRgb="239, 68, 68"
            accentSelectionClass="selection:bg-red-500/30"
            navLinks={[
                { label: "Calculator", href: "/life-insurance/calculator" },
                { label: "Term vs Whole", href: "/life-insurance/term-vs-whole" },
                { label: "Family Needs", href: "/life-insurance/family-needs" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
