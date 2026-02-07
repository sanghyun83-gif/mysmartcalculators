import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Playground Injury Calculator"
            brandIcon="calculator"
            hubPath="/playground-injury"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/playground-injury/calculator" },
                { label: "GUIDE", href: "/playground-injury/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}