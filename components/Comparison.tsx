import { X, Check } from "lucide-react";
import { COMPARISON } from "@/lib/site-data";
import Reveal from "./Reveal";
import ImpactBars from "./ImpactBars";

export default function Comparison() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          A diferença de gerir a obra com o Pillar
        </h2>
        <p className="mt-3 text-slate-600">
          Compare como fica a rotina da sua construtora ou incorporadora.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-12">
        <ImpactBars />
      </Reveal>

      <div className="mt-12 overflow-hidden rounded-lg border border-slate-200">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.4fr_1.4fr]">
          <div className="hidden bg-slate-50 p-5 font-bold text-slate-500 sm:block" />
          <div className="bg-red-50/60 p-5 text-center font-bold text-red-600 sm:text-left">
            Sem o Pillar
          </div>
          <div className="bg-secondary-50 p-5 text-center font-bold text-secondary-700 sm:text-left">
            Com o Pillar
          </div>
        </div>

        {COMPARISON.map((row, index) => (
          <Reveal
            key={row.label}
            delay={index * 0.06}
            className="grid grid-cols-1 border-t border-slate-100 sm:grid-cols-[1fr_1.4fr_1.4fr]"
          >
            <div className="bg-slate-50 px-5 py-4 text-sm font-bold text-slate-700 sm:flex sm:items-center">
              {row.label}
            </div>
            <div className="flex items-start gap-2 px-5 py-4 text-sm text-slate-600">
              <X className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
              {row.sem}
            </div>
            <div className="flex items-start gap-2 bg-secondary-50/40 px-5 py-4 text-sm font-medium text-slate-800">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary-600" />
              {row.com}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
