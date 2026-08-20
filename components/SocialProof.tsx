import { TrendingUp, Headset, MapPin, type LucideIcon } from "lucide-react";
import { SOCIAL_PROOF } from "@/lib/site-data";
import Reveal from "./Reveal";
import CountUp from "./CountUp";

const ICONS: Record<(typeof SOCIAL_PROOF)[number]["icon"], LucideIcon> = {
  "trending-up": TrendingUp,
  headset: Headset,
  "map-pin": MapPin,
};

// Números marcados como placeholder em lib/site-data.ts — substituir antes de publicar.
export default function SocialProof() {
  return (
    <section className="relative z-10 -mt-10 px-4 sm:-mt-14 sm:px-6">
      <Reveal className="mx-auto grid max-w-3xl grid-cols-1 gap-6 rounded-lg border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 sm:grid-cols-3 sm:p-8">
        {SOCIAL_PROOF.map((item) => {
          const Icon = ICONS[item.icon];
          return (
            <div key={item.label} className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
              <span className="inline-flex rounded-lg bg-primary-50 p-2 text-primary-600">
                <Icon className="h-5 w-5" />
              </span>
              <div className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                {item.kind === "count" ? (
                  <CountUp target={item.target} suffix={item.suffix} />
                ) : (
                  item.value
                )}
              </div>
              <div className="text-xs font-medium leading-snug text-slate-500 sm:text-sm">
                {item.label}
              </div>
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}
