import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "mesothelioma";
const meta = getCalculatorMeta(id);

export const metadata = {
  title: meta?.title,
  description: meta?.description,
  alternates: {
    canonical: meta?.canonical,
  }
};

const MesoHubEngine = dynamic(
  () => import("./MesoHubEngine").then(mod => mod.MesoHubEngineComponent),
  {
    ssr: true,
    loading: () => <div className="min-h-screen bg-slate-950 line-rebuild-v2-1-4" />
  }
);

export default function CalcMesotheliomaPage() {
  return <MesoHubEngine />;
}
