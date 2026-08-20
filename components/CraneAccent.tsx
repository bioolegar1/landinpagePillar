"use client";

import { motion } from "framer-motion";

// Ilustração de guindaste em traço técnico (estilo planta baixa), decorativa.
export default function CraneAccent({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 260"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="20" y="238" width="46" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <line x1="43" y1="238" x2="43" y2="22" stroke="currentColor" strokeWidth="1.5" />
      <line x1="43" y1="22" x2="200" y2="22" stroke="currentColor" strokeWidth="1.5" />
      <line x1="43" y1="22" x2="12" y2="34" stroke="currentColor" strokeWidth="1.5" />
      <rect x="4" y="34" width="16" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <line x1="43" y1="60" x2="43" y2="22" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="43" y1="60" x2="185" y2="22" stroke="currentColor" strokeWidth="1" />
      <line x1="43" y1="60" x2="20" y2="34" stroke="currentColor" strokeWidth="1" />

      <motion.g
        style={{ transformOrigin: "170px 22px" }}
        animate={{ rotate: [-2.5, 2.5, -2.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <line x1="170" y1="22" x2="170" y2="92" stroke="currentColor" strokeWidth="1.5" />
        <path d="M164 92 h12 l-3 8 h-6 z" stroke="currentColor" strokeWidth="1.5" />
      </motion.g>
    </svg>
  );
}
