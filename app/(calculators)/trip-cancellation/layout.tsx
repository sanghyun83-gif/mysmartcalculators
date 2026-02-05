import { FlagshipLayout } from "@/components/v3/FlagshipLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Trip Cancellation"
            brandIcon="calculator"
            hubPath="/trip-cancellation"
            accentColorRgb="59, 130, 246"
            accentSelectionClass="selection:bg-blue-500/30"
            navLinks={[
                { label: "CALCULATOR", href: "/trip-cancellation/calculator" },
                { label: "GUIDE", href: "/trip-cancellation/guide" }
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}