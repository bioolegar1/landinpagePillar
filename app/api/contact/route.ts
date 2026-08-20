import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const HORARIO_LABEL: Record<string, string> = {
  manha: "Manhã",
  tarde: "Tarde",
  qualquer: "Qualquer horário",
};

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body.nome !== "string" || !body.nome.trim() || typeof body.whatsapp !== "string" || !body.whatsapp.trim()) {
    return NextResponse.json(
      { ok: false, error: "Informe ao menos nome e WhatsApp." },
      { status: 400 }
    );
  }

  const lead = {
    nome: body.nome.trim(),
    empresa: typeof body.empresa === "string" ? body.empresa.trim() : "",
    whatsapp: body.whatsapp.trim(),
    horario: HORARIO_LABEL[body.horario] ?? "Qualquer horário",
    newsletter: Boolean(body.newsletter),
    recebidoEm: new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }),
  };

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, CONTACT_TO_EMAIL, SMTP_FROM } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD || !CONTACT_TO_EMAIL) {
    console.error("[contact] Variáveis de ambiente SMTP não configuradas.");
    return NextResponse.json(
      { ok: false, error: "Envio de e-mail não configurado no servidor." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  });

  try {
    await transporter.sendMail({
      from: `"Landing Pillar" <${SMTP_FROM ?? SMTP_USER}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: SMTP_USER,
      subject: `Novo contato pela landing page — ${lead.nome}`,
      text: [
        `Nome: ${lead.nome}`,
        `Empresa: ${lead.empresa || "não informado"}`,
        `WhatsApp: ${lead.whatsapp}`,
        `Melhor horário: ${lead.horario}`,
        `Quer receber conteúdos: ${lead.newsletter ? "sim" : "não"}`,
        `Recebido em: ${lead.recebidoEm}`,
      ].join("\n"),
      html: `
        <h2>Novo contato pela landing page do Sistema Pillar</h2>
        <p><strong>Nome:</strong> ${lead.nome}</p>
        <p><strong>Empresa:</strong> ${lead.empresa || "não informado"}</p>
        <p><strong>WhatsApp:</strong> ${lead.whatsapp}</p>
        <p><strong>Melhor horário:</strong> ${lead.horario}</p>
        <p><strong>Quer receber conteúdos:</strong> ${lead.newsletter ? "sim" : "não"}</p>
        <p style="color:#64748b;font-size:12px;">Recebido em ${lead.recebidoEm}</p>
      `,
    });
  } catch (error) {
    console.error("[contact] Falha ao enviar e-mail:", error);
    return NextResponse.json(
      { ok: false, error: "Falha ao enviar seu contato. Tente novamente em instantes." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
