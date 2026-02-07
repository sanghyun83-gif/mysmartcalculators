import { FlagshipLayout } from "@/components/v3/FlagshipLayout";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <FlagshipLayout
            brandName="Manufactured Home Insurance"
            brandIcon="factory"
            hubPath="/manufactured-home-insurance"
            accentColorRgb="37, 99, 235"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "Calculator", href: "/manufactured-home-insurance/calculator" },
                { label: "Guide", href: "/manufactured-home-insurance/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
