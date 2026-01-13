import { Metadata } from "next";
import {
    Truck, Scale, Gavel, Shield, AlertTriangle,
    ChevronRight, ArrowRight, BarChart3, Info,
    CheckCircle2, MapPin, Search, Zap, Star, DollarSign
} from "lucide-react";
import { STATE_FAULT_LAWS, getStatesList, formatCurrency } from "@/lib/calculators/truck-accident";
import Link from "next/link";
import { HubClient } from "./HubClient";

export const metadata: Metadata = {
    title: "TruckMaster AI | Premium Truck Accident Settlement Audit 2026",
    description: "The world's most advanced AI-powered truck accident settlement calculator. Calibrated for 2026 actuarial data and jurisdictional liability rules.",
    alternates: { canonical: './' }
};

export default function TruckAccidentHub() {
    return <HubClient />;
}
