import { FlagshipLayout } from "@/components/v3/FlagshipLayout";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <FlagshipLayout
            brandName="LLC Tax Center"
            brandIcon="briefcase"
            hubPath="/llc-tax"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "Calculator", href: "/llc-tax/calculator" },
                { label: "Guide", href: "/llc-tax/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
