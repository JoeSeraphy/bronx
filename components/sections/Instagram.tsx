/*import Image from "next/image";
import Marquee from "@/components/shared/Marquee";
import { StaggerGroup, StaggerItem } from "@/components/shared/RevealOnScroll";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

export default function Instagram() {
  return (
    <section className="relative overflow-hidden py-36">
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center" aria-hidden>
        <Marquee duration={60} pausable={false} className="w-full">
          <span className="font-display whitespace-nowrap px-10 text-[clamp(6rem,16vw,15rem)] text-white opacity-[0.045]">
            FOLLOW US
          </span>
        </Marquee>
      </div>

      <div className="container relative z-10">
        <div className="mb-14">
          <RevealOnScroll type="fade-up">
            <span className="eyebrow inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-neon before:h-1.5 before:w-1.5 before:rounded-full before:bg-neon">
              @bronxmultimarcas
            </span>
          </RevealOnScroll>
          <RevealOnScroll type="fade-up" delay={0.1}>
            <h2 className="font-display mt-3 text-[clamp(2.2rem,5vw,4.2rem)] uppercase leading-none">
              Direto do Instagram
            </h2>
          </RevealOnScroll>
        </div>

        <StaggerGroup className="columns-1 gap-5 sm:columns-2 lg:columns-4">
          {instaPosts.map((p, i) => (
            <StaggerItem key={i} className="mb-5 break-inside-avoid">
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-charcoal" style={{ height: p.height }}>
                <Image
                  src={p.img}
                  alt="Publicação Instagram Bronx Multimarcas"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover grayscale-[0.55] contrast-[1.1] brightness-[0.85] transition-all duration-500 group-hover:scale-[1.08] group-hover:grayscale-[0.15] group-hover:brightness-[0.75]"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/5 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <p className="text-xs text-grey">{p.caption}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
*/