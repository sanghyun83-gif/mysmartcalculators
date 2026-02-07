import { FlagshipLayout } from "@/components/v3/FlagshipLayout";


export default function LeadPoisoningLayout({
    children }: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="Lead Poisoning Lawsuit"
            brandIcon="droplets"
            hubPath="/lead-poisoning"
            accentColorRgb="147, 51, 234"
            accentSelectionClass="selection:bg-purple-500/30"
            navLinks={[
                { label: "Calculator", href: "/lead-poisoning/calculator" },
                { label: "Guide", href: "/lead-poisoning/guide" },
            ]}
        >
            {children}
        </FlagshipLayout>
    );
}
