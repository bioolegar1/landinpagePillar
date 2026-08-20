import { HOW_IT_WORKS } from "@/lib/site-data";
import Reveal from "./Reveal";

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Como funciona o primeiro contato
        </h2>
        <p className="mt-3 text-slate-600">
          Sem cadastro automático, sem robô: você fala direto com quem entende
          de gestão de obras.
        </p>
      </Reveal>

      <div className="relative mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
        <div
          className="pointer-events-none absolute left-[16.6%] right-[16.6%] top-[22px] hidden border-t border-dashed border-slate-300 sm:block"
          aria-hidden="true"
        />

        {HOW_IT_WORKS.map((step, index) => (
          <Reveal key={step.title} delay={index * 0.1} className="relative text-center">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-primary-600 text-lg font-extrabold text-white">
              {index + 1}
            </div>
            <h3 className="mt-5 font-bold text-slate-900">{step.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{step.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
