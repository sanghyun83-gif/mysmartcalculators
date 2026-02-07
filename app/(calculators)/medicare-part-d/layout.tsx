import { FlagshipLayout } from "@/components/v3/FlagshipLayout";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <FlagshipLayout
            brandName="Medicare Part D"
            brandIcon="pill"
            hubPath="/medicare-part-d"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "Hub", href: "/medicare-part-d" },
                { label: "Calculator", href: "/medicare-part-d/calculator" },
                { label: "Guide", href: "/medicare-part-d/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
