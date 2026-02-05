import React from "react";
import {
    Activity, Home, Truck, Gavel, TrendingUp, Car, Shield,
    Calculator, DollarSign, Scale, Building, PiggyBank,
    Coins, FileCheck, Landmark, Briefcase, Syringe, Heart,
    Percent, PawPrint, Banknote, Leaf, Flame, LucideIcon,
    Sparkles, CreditCard, Hotel, Caravan, Bike
} from "lucide-react";

/**
 * V5.0 Icon ID Protocol Registry
 * Centralized mapping of data-only string keys to validated React components.
 * This prevents Next.js serialization issues from leaking raw strings into JSX tag positions.
 */
export const SCLASS_ICON_REGISTRY: Record<string, LucideIcon> = {
    activity: Activity,
    home: Home,
    truck: Truck,
    gavel: Gavel,
    trending: TrendingUp,
    car: Car,
    shield: Shield,
    calculator: Calculator,
    dollar: DollarSign,
    scale: Scale,
    building: Building,
    piggy: PiggyBank,
    coins: Coins,
    filecheck: FileCheck,
    landmark: Landmark,
    briefcase: Briefcase,
    syringe: Syringe,
    heart: Heart,
    percent: Percent,
    paw: PawPrint,
    banknote: Banknote,
    leaf: Leaf,
    flame: Flame,
    sparkles: Sparkles,
    creditcard: CreditCard,
    hotel: Hotel,
    caravan: Caravan,
    bike: Bike
};

/**
 * Render-Safe Icon Resolver
 * Guarantees that the returned value is a valid React component.
 * NEVER returns a string.
 */
export function getSClassIcon(iconId: string | LucideIcon | undefined): LucideIcon {
    // If it's already a functional component (LucideIcon), return it directly
    if (typeof iconId === 'function') return iconId;

    // If it's a string, look it up in the registry
    if (typeof iconId === 'string') {
        const key = iconId.toLowerCase().trim();
        return SCLASS_ICON_REGISTRY[key] || Activity;
    }

    // Default fallback
    return Activity;
}
