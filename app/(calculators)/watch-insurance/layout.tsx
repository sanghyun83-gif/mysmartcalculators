import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Watch Insurance"
            brandIcon="calculator"
            hubPath="/watch-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/watch-insurance/calculator" },
                { label: "GUIDE", href: "/watch-insurance/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}