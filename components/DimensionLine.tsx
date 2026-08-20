"use client";

import { motion } from "framer-motion";

// Linha de cota técnica (como em planta baixa), atravessando a largura da seção.
export default function DimensionLine({ label }: { label: string }) {
  const ticks = Array.from({ length: 9 }, (_, i) => 20 + (i + 1) * 96);

  return (
    <div className="relative bg-white py-10">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <svg viewBox="0 0 1000 32" className="h-8 w-full text-slate-300" preserveAspectRatio="none">
          <motion.path
            d="M20 16 H980"
            stroke="currentColor"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <motion.path
            d="M20 16 l12 -7 M20 16 l12 7 M980 16 l-12 -7 M980 16 l-12 7"
            stroke="currentColor"
            strokeWidth="1.5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.3 }}
          />
          {ticks.map((x, i) => (
            <motion.line
              key={x}
              x1={x}
              y1={10}
              x2={x}
              y2={22}
              stroke="currentColor"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 + i * 0.05 }}
            />
          ))}
        </svg>

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.4 }}
            className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-500"
          >
            {label}
          </motion.span>
        </div>
      </div>
    </div>
  );
}
