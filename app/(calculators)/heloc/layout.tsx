import { FlagshipLayout } from "@/components/v3/FlagshipLayout";
import { CreditCard } from "lucide-react";

export default function HelocLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FlagshipLayout
            brandName="HELOC AI"
            brandIcon="creditcard"
            hubPath="/heloc"
            accentColorRgb="5, 150, 105"
            accentSelectionClass="selection:bg-emerald-500/30"
            navLinks={[]}
        >
            {children}
        </FlagshipLayout>
    );
}
