import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Wrongful Death Calculator"
            brandIcon="calculator"
            hubPath="/wrongful-death"
            accentColorRgb="245, 158, 11"
            accentSelectionClass="selection:bg-amber-500/30"
            navLinks={[
                
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}