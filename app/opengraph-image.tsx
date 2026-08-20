import { ImageResponse } from "next/og";

export const alt = "Sistema Pillar — gestão de obras, custo e depreciação para construtoras";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#020617",
          backgroundImage:
            "linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              display: "flex",
              width: 14,
              height: 14,
              borderRadius: 4,
              backgroundColor: "#38bdf8",
            }}
          />
          <span style={{ color: "#38bdf8", fontSize: 28, fontWeight: 700, letterSpacing: 2 }}>
            INFORPLACE · SISTEMA PILLAR
          </span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.15,
            color: "#ffffff",
            maxWidth: 980,
          }}
        >
          Apuração de obra e depreciação sem planilha
        </div>

        <div style={{ display: "flex", marginTop: 32, fontSize: 30, color: "#94a3b8" }}>
          Custo por etapa · Depreciação de patrimônio · Índices INCC/IGPM
        </div>
      </div>
    ),
    { ...size }
  );
}
