import { CONTACT } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-8 pb-24 text-center text-sm text-slate-400 sm:pb-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-bold text-white">
          Inforplace <span className="text-secondary-400">Sistema Pillar</span>
        </p>
        <p className="mt-2">
          {CONTACT.phoneDisplay} · {CONTACT.email} · {CONTACT.address}
        </p>
        <p className="mt-4 text-xs text-slate-500">
          © {new Date().getFullYear()} Inforplace Sistemas. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
