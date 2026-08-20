import { MessageCircle } from "lucide-react";
import { buildWhatsappLink, WHATSAPP_MESSAGE_GENERIC } from "@/lib/site-data";

export default function WhatsappFloatingButton() {
  return (
    <a
      href={buildWhatsappLink(WHATSAPP_MESSAGE_GENERIC)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-secondary-600 text-white shadow-xl shadow-secondary-900/30 transition hover:scale-105 hover:bg-secondary-700 sm:flex"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary-500 opacity-40" />
      <MessageCircle className="relative h-6 w-6" />
    </a>
  );
}
