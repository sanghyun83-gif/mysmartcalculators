import { FlagshipLayout } from "@/components/v3/FlagshipLayout";


export default function HurricaneInsuranceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Hurricane Insurance Layout"
            brandIcon="wind"
            hubPath="/hurricane-insurance"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/hurricane-insurance/calculator" },
                { label: "GUIDE", href: "/hurricane-insurance/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
