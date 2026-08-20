import { MessageCircle } from "lucide-react";
import { buildWhatsappLink, WHATSAPP_MESSAGE_DEMO } from "@/lib/site-data";

export default function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-slate-200 bg-white/95 p-3 backdrop-blur sm:hidden">
      <a
        href="#contato"
        className="flex-1 rounded-lg bg-primary-600 px-4 py-3 text-center text-sm font-bold text-white"
      >
        Agendar demonstração
      </a>
      <a
        href={buildWhatsappLink(WHATSAPP_MESSAGE_DEMO)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="flex items-center justify-center rounded-lg bg-secondary-600 px-4 py-3 text-white"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
    </div>
  );
}
