import { MessageCircle } from "lucide-react";
import { buildWhatsappLink, WHATSAPP_MESSAGE_DEMO } from "@/lib/site-data";
import LeadForm from "./LeadForm";
import Reveal from "./Reveal";

export default function ContactSection() {
  return (
    <section id="contato" className="bg-slate-950 py-20">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Fale com um especialista do Sistema Pillar
          </h2>
          <p className="mt-3 text-slate-300">
            Deixe seus dados e nossa equipe entra em contato para agendar uma
            demonstração. Resposta em até 1 dia útil, sem robô e sem compromisso.
            Se preferir, fale com a gente agora mesmo pelo WhatsApp.
          </p>

          <a
            href={buildWhatsappLink(WHATSAPP_MESSAGE_DEMO)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-secondary-600 px-6 py-3.5 font-bold text-white transition hover:bg-secondary-700"
          >
            <MessageCircle className="h-4 w-4" />
            Prefiro falar direto no WhatsApp
          </a>
        </Reveal>

        <Reveal delay={0.1} className="rounded-xl bg-white p-6 text-slate-800 sm:p-8">
          <LeadForm />
        </Reveal>
      </div>
    </section>
  );
}
