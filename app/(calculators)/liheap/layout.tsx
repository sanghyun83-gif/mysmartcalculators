import { FlagshipLayout } from "@/components/v3/FlagshipLayout";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <FlagshipLayout
            brandName="LIHEAP Support"
            brandIcon="flame"
            hubPath="/liheap"
            accentColorRgb="249, 115, 22"
            accentSelectionClass="selection:bg-orange-500/30"
            navLinks={[
                { label: "Calculator", href: "/liheap/calculator" },
                { label: "Guide", href: "/liheap/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
