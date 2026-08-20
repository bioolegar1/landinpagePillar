import { DEPRECIATION_SAMPLE, COST_INDICES } from "@/lib/site-data";
import Reveal from "./Reveal";

export default function DepreciationLedger() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Apuração de custo e depreciação, sem calculadora
          </h2>
          <p className="mt-3 text-slate-600">
            O módulo Patrimônio calcula a depreciação de cada bem da obra
            automaticamente — equipamento, veículo, andaime, ferramenta —
            e joga o resultado direto na apuração contábil, sem planilha
            paralela.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 overflow-x-auto rounded-lg border border-slate-200 bg-white">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-100 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                <th className="px-4 py-3">Bem</th>
                <th className="px-4 py-3 text-right">Aquisição (R$)</th>
                <th className="px-4 py-3 text-right">Taxa a.a.</th>
                <th className="px-4 py-3 text-right">Depreciado (R$)</th>
                <th className="px-4 py-3 text-right">Valor residual (R$)</th>
              </tr>
            </thead>
            <tbody className="font-mono">
              {DEPRECIATION_SAMPLE.map((row, index) => (
                <tr
                  key={row.bem}
                  className={`border-b border-slate-100 ${index % 2 === 1 ? "bg-slate-50/60" : ""}`}
                >
                  <td className="px-4 py-3 font-sans font-medium text-slate-800">{row.bem}</td>
                  <td className="px-4 py-3 text-right text-slate-600">{row.aquisicao}</td>
                  <td className="px-4 py-3 text-right text-slate-600">{row.taxaAno}</td>
                  <td className="px-4 py-3 text-right text-red-600">{row.depreciado}</td>
                  <td className="px-4 py-3 text-right font-bold text-secondary-700">{row.residual}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <p className="mt-3 text-xs text-slate-400">
          Valores ilustrativos — o cálculo real segue as taxas vigentes da Receita Federal, aplicado bem a bem.
        </p>

        <Reveal delay={0.15} className="mt-8 flex flex-wrap gap-3">
          {COST_INDICES.map((index) => (
            <div
              key={index.code}
              className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm"
            >
              <span className="font-mono text-xs font-bold text-primary-700">{index.code}</span>
              <span className="text-slate-500">{index.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
