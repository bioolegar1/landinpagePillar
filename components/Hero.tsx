"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";
import { buildWhatsappLink, SEGMENTS, WHATSAPP_MESSAGE_DEMO } from "@/lib/site-data";
import CraneAccent from "./CraneAccent";

const HIGHLIGHTS = ["Apuração de custo por obra", "Depreciação automática", "Índices INCC/IGPM integrados"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="blueprint-grid pointer-events-none absolute inset-0 text-primary-400/[0.07]" />
      <CraneAccent className="pointer-events-none absolute -right-6 -top-6 hidden h-72 w-72 text-primary-300/[0.12] lg:block" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-[1.05fr_1fr] lg:py-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold uppercase tracking-wide text-primary-400">
            Especialista em construção civil desde 2005
          </span>

          <h1 className="mt-4 max-w-xl text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl">
            Apuração de obra e depreciação{" "}
            <span className="text-secondary-400">sem planilha e sem retrabalho</span>
          </h1>

          <p className="mt-5 max-w-lg text-lg text-slate-300">
            O Sistema Pillar une obra, compras, estoque, financeiro e
            contabilidade em um só lugar — custo real por etapa, depreciação
            de patrimônio e correção por INCC/IGPM, tudo automático.
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-secondary-400" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contato"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-4 font-bold text-slate-900 transition hover:bg-primary-50"
            >
              Quero agendar uma demonstração
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>

            <a
              href={buildWhatsappLink(WHATSAPP_MESSAGE_DEMO)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-7 py-4 font-bold text-white transition hover:border-secondary-400 hover:bg-white/5"
            >
              <MessageCircle className="h-4 w-4 text-secondary-400" />
              Falar agora no WhatsApp
            </a>
          </div>

          <p className="mt-5 text-xs uppercase tracking-wide text-slate-500">
            Feito para {SEGMENTS.join(" · ")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="overflow-hidden rounded-xl border border-white/10 shadow-2xl shadow-black/40">
            <Image
              src="/images/pillar-notebook.png"
              alt="Sistema Pillar aberto em um notebook, mostrando o módulo financeiro"
              width={1536}
              height={1024}
              priority
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
          <p className="mt-3 text-center text-xs text-slate-500 lg:text-left">
            Tela real do Sistema Pillar — módulo Financeiro
          </p>
        </motion.div>
      </div>
    </section>
  );
}
