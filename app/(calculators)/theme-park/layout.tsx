import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Theme Park Calculator"
            brandIcon="calculator"
            hubPath="/theme-park"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/theme-park/calculator" },
                { label: "GUIDE", href: "/theme-park/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
