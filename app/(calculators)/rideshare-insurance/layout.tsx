import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Rideshare Insurance"
            brandIcon="calculator"
            hubPath="/rideshare-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/rideshare-insurance/calculator" },
                { label: "GUIDE", href: "/rideshare-insurance/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
