import { FlagshipLayout } from "@/components/v3/FlagshipLayout";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <FlagshipLayout
            brandName="Lemon Law"
            brandIcon="car"
            hubPath="/lemon-law"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "Calculator", href: "/lemon-law/lemon-calculator" },
                { label: "State Laws", href: "/lemon-law/state-laws" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
