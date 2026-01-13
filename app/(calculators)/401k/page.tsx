import { Metadata } from "next";
import {
    TrendingUp, Scale, Gavel, Shield, AlertTriangle,
    ChevronRight, ArrowRight, BarChart3, Info,
    CheckCircle2, MapPin, Search, Zap, Star, DollarSign
} from "lucide-react";
import { STATE_FAULT_LAWS, getStatesList, formatCurrency } from "@/lib/calculators/401k";
import Link from "next/link";
import { HubClient } from "./HubClient";

export const metadata: Metadata = {
    title: "FinancePro AI | Premium 401k Growth Settlement Audit 2026",
    description: "Professional-grade estimator for 401k Growth cases and claims.",
    alternates: { canonical: './' }
};

export default function TrendingUpAccidentHub() {
    return <HubClient />;
}
