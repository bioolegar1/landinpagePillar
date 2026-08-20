"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import { buildWhatsappLink, WHATSAPP_MESSAGE_DEMO } from "@/lib/site-data";

type Status = "idle" | "submitting" | "success" | "error";

// Padrão BR completo: +55 (DD) 9XXXX-XXXX — DDD com 2 dígitos, celular com o nono dígito.
const WHATSAPP_PATTERN = /^\+55 \(\d{2}\) \d{5}-\d{4}$/;

function formatWhatsapp(raw: string): string {
  const digits = raw.replace(/\D/g, "").replace(/^55/, "").slice(0, 11);

  let formatted = "+55";
  if (digits.length > 0) formatted += ` (${digits.slice(0, 2)}`;
  if (digits.length >= 2) formatted += ")";
  if (digits.length > 2) formatted += ` ${digits.slice(2, 7)}`;
  if (digits.length > 7) formatted += `-${digits.slice(7, 11)}`;
  return formatted;
}

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleWhatsappChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.value = formatWhatsapp(event.target.value);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Guarda a referência do form antes do await — depois de um await,
    // event.currentTarget já volta a ser null (só é válido de forma síncrona).
    const formEl = event.currentTarget;
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(formEl);
    const payload = {
      nome: String(formData.get("nome") ?? ""),
      empresa: String(formData.get("empresa") ?? ""),
      whatsapp: String(formData.get("whatsapp") ?? ""),
      horario: String(formData.get("horario") ?? ""),
      newsletter: formData.get("newsletter") === "on",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error ?? "Não foi possível enviar seus dados.");
      }

      setStatus("success");
      formEl.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Não foi possível enviar seus dados."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-lg border border-secondary-200 bg-secondary-50 p-8 text-center">
        <CheckCircle2 className="h-10 w-10 text-secondary-600" />
        <h3 className="text-lg font-bold text-slate-900">Recebemos seu contato!</h3>
        <p className="text-sm text-slate-600">
          Nossa equipe vai te chamar em breve. Se preferir, fale agora mesmo pelo WhatsApp.
        </p>
        <a
          href={buildWhatsappLink(WHATSAPP_MESSAGE_DEMO)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-2 rounded-lg bg-secondary-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-secondary-700"
        >
          <MessageCircle className="h-4 w-4" />
          Falar no WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="nome" className="mb-1 block text-sm font-semibold text-slate-700">
          Nome *
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          required
          minLength={2}
          className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
          placeholder="Seu nome"
        />
      </div>

      <div>
        <label htmlFor="empresa" className="mb-1 block text-sm font-semibold text-slate-700">
          Empresa
        </label>
        <input
          id="empresa"
          name="empresa"
          type="text"
          className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
          placeholder="Nome da construtora/incorporadora"
        />
      </div>

      <div>
        <label htmlFor="whatsapp" className="mb-1 block text-sm font-semibold text-slate-700">
          WhatsApp *
        </label>
        <input
          id="whatsapp"
          name="whatsapp"
          type="tel"
          inputMode="numeric"
          required
          defaultValue="+55 "
          onChange={handleWhatsappChange}
          pattern={WHATSAPP_PATTERN.source}
          title="Use o formato +55 (DD) 99999-9999"
          maxLength={19}
          className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
          placeholder="+55 (62) 99999-9999"
        />
      </div>

      <div>
        <label htmlFor="horario" className="mb-1 block text-sm font-semibold text-slate-700">
          Melhor horário para contato
        </label>
        <select
          id="horario"
          name="horario"
          className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
          defaultValue="qualquer"
        >
          <option value="manha">Manhã</option>
          <option value="tarde">Tarde</option>
          <option value="qualquer">Qualquer horário</option>
        </select>
      </div>

      <label className="flex items-start gap-2 text-sm text-slate-600">
        <input
          type="checkbox"
          name="newsletter"
          className="mt-0.5 h-4 w-4 rounded border-slate-300 text-primary-600 focus:ring-primary-500"
        />
        Quero receber conteúdos sobre gestão de obras da Inforplace
      </label>

      {status === "error" && (
        <p className="text-sm font-medium text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-lg bg-primary-600 px-6 py-3.5 font-bold text-white transition hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Enviando..." : "Quero agendar uma reunião"}
      </button>
    </form>
  );
}
