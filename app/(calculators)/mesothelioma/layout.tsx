import { FlagshipLayout } from "@/components/v3/FlagshipLayout";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <FlagshipLayout
            brandName="Mesothelioma"
            brandIcon="scale"
            hubPath="/mesothelioma"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "Hub", href: "/mesothelioma" },
                { label: "Settlement", href: "/mesothelioma/injury-settlement" },
                { label: "Injury Types", href: "/mesothelioma/injury-types" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
