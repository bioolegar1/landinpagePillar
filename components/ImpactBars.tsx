"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { IMPACT_ROWS } from "@/lib/site-data";

function Bar({ pct, text, color, inView, delay }: { pct: number; text: string; color: string; inView: boolean; delay: number }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-xs font-semibold text-slate-500">
        <span>{text}</span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className={`h-full rounded-full ${color}`}
        />
      </div>
    </div>
  );
}

export default function ImpactBars() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      className="mx-auto max-w-3xl rounded-lg border border-slate-200 bg-white p-6 sm:p-8"
    >
      <div className="mb-6 grid grid-cols-2 text-xs font-bold uppercase tracking-wide">
        <span className="text-red-500">Sem o Pillar</span>
        <span className="text-secondary-600">Com o Pillar</span>
      </div>

      <div className="space-y-6">
        {IMPACT_ROWS.map((row, index) => (
          <div key={row.label}>
            <p className="mb-2 text-sm font-bold text-slate-800">{row.label}</p>
            <div className="grid grid-cols-2 gap-6">
              <Bar pct={row.sem.pct} text={row.sem.text} color="bg-red-400" inView={inView} delay={index * 0.15} />
              <Bar pct={row.com.pct} text={row.com.text} color="bg-secondary-500" inView={inView} delay={index * 0.15 + 0.1} />
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-[11px] text-slate-400">
        Comparação ilustrativa do cenário típico de uma construtora sem sistema integrado.
      </p>
    </div>
  );
}
