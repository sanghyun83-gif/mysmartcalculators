import { FlagshipLayout } from "@/components/v3/FlagshipLayout";


export default function HvacInsuranceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="HVAC Insurance"
            brandIcon="thermometer"
            hubPath="/hvac-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "Calculator", href: "/hvac-insurance/calculator" },
                { label: "Guide", href: "/hvac-insurance/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
