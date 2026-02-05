import { FlagshipLayout } from "@/components/v3/FlagshipLayout";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <FlagshipLayout
            brandName="Medicare Part B"
            brandIcon="stethoscope"
            hubPath="/medicare-part-b"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "Hub", href: "/medicare-part-b" },
                { label: "Calculator", href: "/medicare-part-b/calculator" },
                { label: "Guide", href: "/medicare-part-b/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
