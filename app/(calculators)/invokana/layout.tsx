import { FlagshipLayout } from "@/components/v3/FlagshipLayout";


export default function InvokanaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Invokana"
            brandIcon="heart"
            hubPath="/invokana"
            accentColorRgb="147, 51, 234"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "Calculator", href: "/invokana/calculator" },
                { label: "Guide", href: "/invokana/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
