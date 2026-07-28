import Image from "next/image";
import Marquee from "@/components/shared/Marquee";
import TiltCard from "@/components/shared/TiltCard";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { testimonials } from "@/lib/data";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="mb-4 flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-[15px] w-[15px]" strokeWidth={1.5} stroke={i < rating ? "none" : "rgba(234,234,234,0.35)"} fill={i < rating ? "#CBFF3D" : "none"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-36">
      <div className="pointer-events-none absolute -inset-[10%] z-0 opacity-50 blur-[90px]" aria-hidden>
        <div className="absolute -left-[6%] -top-[10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(203,255,61,0.35)_0%,transparent_70%)]" />
        <div className="absolute -bottom-[15%] right-0 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.10)_0%,transparent_70%)]" />
      </div>

      <div className="container relative z-10 mb-14 text-center">
        <RevealOnScroll type="fade-up">
          <span className="eyebrow inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-neon before:h-1.5 before:w-1.5 before:rounded-full before:bg-neon">
            Avaliações
          </span>
        </RevealOnScroll>
        <RevealOnScroll type="fade-up" delay={0.1}>
          <h2 className="font-display mt-3 text-[clamp(2.2rem,5vw,4.2rem)] uppercase leading-none">
            O que dizem sobre a Bronx
          </h2>
        </RevealOnScroll>
      </div>

      <div className="relative z-10 [mask-image:linear-gradient(90deg,transparent_0%,#000_8%,#000_92%,transparent_100%)]">
        <Marquee duration={42}>
          <div className="flex gap-6 pr-6">
            {testimonials.map((t) => (
              <TiltCard key={t.name} max={4} className="w-[370px] flex-none rounded-2xl border border-white/[0.14] bg-white/[0.045] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
                <span className="font-display block text-[48px] leading-none text-neon opacity-50">&quot;</span>
                <p className="my-4 min-h-[95px] text-sm leading-relaxed text-[#D8D8D8]">{t.text}</p>
                <Stars rating={t.rating} />
                <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                  <Image src={t.avatar} alt={`Foto de ${t.name}`} width={44} height={44} className="rounded-full object-cover grayscale-[0.4]" />
                  <div>
                    <div className="text-[13px] font-bold">{t.name}</div>
                    <div className="font-mono text-[10px] text-grey">{t.role}</div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
