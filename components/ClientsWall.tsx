import { CLIENTS } from "@/lib/site-data";
import Reveal from "./Reveal";
import ClientLogo from "./ClientLogo";

export default function ClientsWall() {
  const loop = [...CLIENTS, ...CLIENTS];

  return (
    <section className="overflow-hidden bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
            Construtoras e engenharias que já usam o Pillar
          </p>
        </Reveal>
      </div>

      <Reveal
        delay={0.1}
        className="pause-on-hover relative mt-8 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
      >
        <div className="animate-marquee flex w-max items-center gap-16 py-2">
          {loop.map((client, index) => (
            <ClientLogo
              key={`${client.primary}-${client.secondary ?? ""}-${index}`}
              client={client}
              index={index}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
