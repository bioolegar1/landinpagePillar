import { FAQS } from "@/lib/site-data";
import Reveal from "./Reveal";

export default function Faq() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Perguntas frequentes
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
          {FAQS.map((faq) => (
            <details key={faq.question} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-slate-900 marker:content-none">
                {faq.question}
                <span className="ml-4 shrink-0 text-primary-600 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
