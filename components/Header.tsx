import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { buildWhatsappLink, WHATSAPP_MESSAGE_GENERIC } from "@/lib/site-data";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2">
          <Image src="/images/pillar-icon.png" alt="" width={28} height={28} className="rounded-md" />
          <span className="text-lg font-extrabold tracking-tight text-white">
            Inforplace
          </span>
          <span className="rounded-full bg-primary-500/10 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-primary-300">
            Sistema Pillar
          </span>
        </div>

        <a
          href={buildWhatsappLink(WHATSAPP_MESSAGE_GENERIC)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-secondary-600 px-3 py-2 text-sm font-bold text-white transition hover:bg-secondary-700 sm:px-4"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="hidden sm:inline">Falar no WhatsApp</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
