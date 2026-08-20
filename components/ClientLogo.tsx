import {
  HardHat,
  Wrench,
  Hammer,
  Ruler,
  Compass,
  Building2,
  Landmark,
  TrafficCone,
  Blocks,
  Truck,
  type LucideIcon,
} from "lucide-react";
import type { Client } from "@/lib/site-data";

// Ícones de temática construtiva, bem desenhados (Lucide) — legíveis mesmo pequenos.
const ICONS: LucideIcon[] = [
  HardHat,
  Building2,
  Truck,
  Landmark,
  Compass,
  Blocks,
  Ruler,
  Wrench,
  TrafficCone,
  Hammer,
];

const COLORS = ["#0369a1", "#15803d", "#334155", "#b45309", "#0f766e", "#4338ca"];

export default function ClientLogo({ client, index }: { client: Client; index: number }) {
  const color = COLORS[index % COLORS.length];
  const Icon = ICONS[index % ICONS.length];

  return (
    <div className="flex shrink-0 items-center gap-3 transition-transform duration-200 ease-out hover:z-10 hover:scale-[1.15]">
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
        style={{ backgroundColor: `${color}14` }}
      >
        <Icon className="h-5 w-5" style={{ color }} strokeWidth={2} />
      </span>
      <div className="leading-none">
        <div className="text-lg font-extrabold tracking-tight text-slate-800">{client.primary}</div>
        {client.secondary && (
          <div className="mt-0.5 text-[10px] font-bold tracking-[0.18em] text-slate-400">
            {client.secondary}
          </div>
        )}
      </div>
    </div>
  );
}
