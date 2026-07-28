import Image from "next/image";
import RevealOnScroll, { StaggerGroup, StaggerItem } from "@/components/shared/RevealOnScroll";
import TiltCard from "@/components/shared/TiltCard";
import { brands } from "@/lib/data";

export default function Brands() {
  return (
    <section id="marcas" className="py-36">
      <div className="container">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-5">
          <div>
            <RevealOnScroll type="fade-up">
              <span className="eyebrow inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-neon before:h-1.5 before:w-1.5 before:rounded-full before:bg-neon">
                Curadoria Bronx
              </span>
            </RevealOnScroll>
            <RevealOnScroll type="fade-up" delay={0.1}>
              <h2 className="font-display mt-3 text-[clamp(2.2rem,5vw,4.4rem)] uppercase leading-none">
                Marcas que carregamos
              </h2>
            </RevealOnScroll>
          </div>
          <RevealOnScroll type="fade-right">
            <p className="max-w-[38ch] text-sm leading-relaxed text-[#D8D8D8]">
              Grifes nacionais e importadas, selecionadas a dedo.
            </p>
          </RevealOnScroll>
        </div>

        <StaggerGroup className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {brands.map((b, i) => (
            <StaggerItem key={b.code} className={i % 4 === 1 || i % 4 === 2 ? "lg:mt-12" : ""}>
              <TiltCard max={7} className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-charcoal shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={b.img}
                    alt={`Coleção ${b.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover grayscale-[0.75] contrast-[1.12] brightness-[0.72] transition-transform duration-500 group-hover:scale-110 group-hover:grayscale-[0.25] group-hover:brightness-[0.62]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/25 to-black/95" />
                </div>

                <div className="absolute inset-x-6 top-6 z-10 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/35 bg-black/40 font-display text-sm backdrop-blur-md transition-colors group-hover:border-neon group-hover:text-neon">
                    {b.mono}
                  </div>
                  <span className="font-mono text-[11px] text-grey/75">{b.code}</span>
                </div>

                <div className="absolute inset-x-7 bottom-7 z-10">
                  <h3 className="font-display text-[clamp(1.3rem,2.4vw,2rem)] uppercase">{b.name}</h3>
                  <p className="mt-2 max-h-0 max-w-[32ch] overflow-hidden text-[13px] leading-snug text-grey opacity-0 transition-all duration-500 group-hover:mt-2 group-hover:max-h-24 group-hover:opacity-100">
                    {b.desc}
                  </p>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
