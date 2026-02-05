import { FlagshipLayout } from "@/components/v3/FlagshipLayout";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <FlagshipLayout
            brandName="LTD Calculator"
            brandIcon="accessibility"
            hubPath="/ltd"
            accentColorRgb="16, 185, 129"
            accentSelectionClass="selection:bg-emerald-500/30"
            navLinks={[
                { label: "Calculator", href: "/ltd/calculator" },
                { label: "Benefits Guide", href: "/ltd/benefits-guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
