import { NextResponse } from "next/server";

// Mock: ainda não há backend/CRM definido para receber os leads.
// Quando existir, troque o corpo desta função pelo envio real (e-mail, CRM, webhook etc.)
// mantendo o mesmo contrato de request/response para não precisar alterar o front.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body.nome !== "string" || !body.nome.trim() || typeof body.whatsapp !== "string" || !body.whatsapp.trim()) {
    return NextResponse.json(
      { ok: false, error: "Informe ao menos nome e WhatsApp." },
      { status: 400 }
    );
  }

  console.log("[lead:pillar-landing-page]", {
    nome: body.nome,
    empresa: body.empresa ?? null,
    whatsapp: body.whatsapp,
    horario: body.horario ?? null,
    newsletter: Boolean(body.newsletter),
    recebidoEm: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
