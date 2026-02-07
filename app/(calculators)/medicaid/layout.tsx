import { FlagshipLayout } from "@/components/v3/FlagshipLayout";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <FlagshipLayout
            brandName="Medicaid Calculator"
            brandIcon="users"
            hubPath="/medicaid"
            accentColorRgb="37, 99, 235"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "Calculator", href: "/medicaid/calculator" },
                { label: "Guide", href: "/medicaid/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
