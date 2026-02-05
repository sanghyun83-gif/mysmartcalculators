import { FlagshipLayout } from "@/components/v3/FlagshipLayout";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <FlagshipLayout
            brandName="Lupron Calculator"
            brandIcon="heart"
            hubPath="/lupron"
            accentColorRgb="147, 51, 234"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "Calculator", href: "/lupron/calculator" },
                { label: "Guide", href: "/lupron/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
