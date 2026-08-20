import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site-data";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Quem já usa o Pillar
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <Reveal
              key={testimonial.name}
              delay={index * 0.05}
              className="flex flex-col gap-3 rounded-lg border border-slate-100 bg-slate-50 p-6"
            >
              <Quote className="h-5 w-5 text-primary-300" />
              <p className="text-sm text-slate-600">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="mt-auto pt-2">
                <p className="text-sm font-bold text-slate-900">{testimonial.name}</p>
                <p className="text-xs text-slate-500">{testimonial.company}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
