import { FlagshipLayout } from "@/components/v3/FlagshipLayout";


export default function IvcFilterLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="IVC Filter"
            brandIcon="heart"
            hubPath="/ivc-filter"
            accentColorRgb="147, 51, 234"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "Calculator", href: "/ivc-filter/calculator" },
                { label: "Guide", href: "/ivc-filter/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
