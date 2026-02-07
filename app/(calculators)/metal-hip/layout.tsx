import { FlagshipLayout } from "@/components/v3/FlagshipLayout";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <FlagshipLayout
            brandName="Metal Hip Lawsuit"
            brandIcon="heart"
            hubPath="/metal-hip"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "Hub", href: "/metal-hip" },
                { label: "Calculator", href: "/metal-hip/calculator" },
                { label: "Guide", href: "/metal-hip/guide" },
                { label: "Manufacturers", href: "/metal-hip/manufacturers" },
                { label: "Symptoms", href: "/metal-hip/symptoms" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
