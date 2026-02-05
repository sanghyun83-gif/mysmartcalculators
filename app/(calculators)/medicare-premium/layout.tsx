import { FlagshipLayout } from "@/components/v3/FlagshipLayout";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <FlagshipLayout
            brandName="Medicare Premium"
            brandIcon="heart"
            hubPath="/medicare-premium"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "Hub", href: "/medicare-premium" },
                { label: "Calculator", href: "/medicare-premium/calculator" },
                { label: "Guide", href: "/medicare-premium/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
