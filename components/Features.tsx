import {
  Wallet,
  CalendarRange,
  ShoppingCart,
  Boxes,
  Users,
  Calculator,
  Landmark,
  Receipt,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { FEATURES, type Feature } from "@/lib/site-data";
import Reveal from "./Reveal";

const ICONS: Record<Feature["icon"], LucideIcon> = {
  wallet: Wallet,
  "calendar-range": CalendarRange,
  "shopping-cart": ShoppingCart,
  boxes: Boxes,
  users: Users,
  calculator: Calculator,
  landmark: Landmark,
  receipt: Receipt,
  wrench: Wrench,
};

export default function Features() {
  return (
    <section
      className="bg-slate-950 pb-20 pt-24"
      style={{ clipPath: "polygon(0 28px, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Os módulos do Sistema Pillar
          </h2>
          <p className="mt-3 text-slate-400">
            As 9 áreas de gestão do Pillar, integradas — da obra à apuração
            contábil, sem planilha paralela.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => {
            const Icon = ICONS[feature.icon];
            return (
              <Reveal key={feature.title} delay={index * 0.05}>
                <div className="flex items-start gap-4 border-l-2 border-white/10 pl-4">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary-400" />
                  <div>
                    <h3 className="font-bold text-white">{feature.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{feature.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
