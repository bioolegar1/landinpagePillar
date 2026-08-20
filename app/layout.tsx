import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sistema Pillar | Gestão de Obras para Construtoras e Incorporadoras",
  description:
    "Fale com um especialista Inforplace e conheça o Sistema Pillar: gestão financeira, de compras, estoque e planejamento de obra em um só sistema.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-800">
        {children}
      </body>
    </html>
  );
}
