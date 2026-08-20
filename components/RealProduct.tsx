import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

const POINTS = [
  "Interface real, usada por construtoras e incorporadoras parceiras",
  "Índices INCC e IGPM atualizados, direto no gerenciador financeiro",
  "Acesso remoto seguro, direto do escritório ou da obra",
];

export default function RealProduct() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            A tela do Financeiro, sem retoque
          </h2>
          <p className="mt-3 max-w-xl text-slate-600">
            Não é protótipo: é o gerenciador financeiro do Pillar em uso — repare
            no painel de índices no canto direito, com INCC e IGPM atualizados
            para corrigir contratos e orçamentos automaticamente.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 overflow-hidden rounded-lg border border-slate-200">
          <Image
            src="/images/pillar-tela.webp"
            alt="Tela do Gerenciador Financeiro do Sistema Pillar"
            width={846}
            height={450}
            className="h-auto w-full"
            sizes="(max-width: 1024px) 100vw, 896px"
          />
        </Reveal>

        <Reveal delay={0.15} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8">
          {POINTS.map((point) => (
            <div key={point} className="flex items-start gap-2 text-sm text-slate-700">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary-600" />
              {point}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
