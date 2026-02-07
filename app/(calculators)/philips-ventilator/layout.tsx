import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Philips Ventilator Calculator"
            brandIcon="calculator"
            hubPath="/philips-ventilator"
            accentColorRgb="168, 85, 247"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/philips-ventilator/calculator" },
                { label: "GUIDE", href: "/philips-ventilator/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}