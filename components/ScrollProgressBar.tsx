"use client";

import { HardHat } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });
  const left = useTransform(progress, (v) => `${v * 100}%`);

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-[3px] bg-slate-800/60">
      <motion.div
        style={{ scaleX: progress }}
        className="h-full origin-left bg-[#f5c518]"
      />
      <motion.div
        style={{ left }}
        className="pointer-events-none absolute top-0.5 -translate-x-1/2"
      >
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#f5c518] shadow-[0_0_0_2px_rgba(2,6,23,0.9)]">
          <HardHat className="h-2.5 w-2.5 text-slate-900" strokeWidth={2.5} />
        </span>
      </motion.div>
    </div>
  );
}
