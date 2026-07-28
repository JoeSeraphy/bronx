"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import MagneticButton from "@/components/shared/MagneticButton";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { ArrowRightIcon } from "@/components/shared/Icons";
import { SITE } from "@/lib/data";

export default function LojaFisica() {
  const visualRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: visualRef, offset: ["start end", "end start"] });

  const yBig = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const ySmall = useTransform(scrollYProgress, [0, 1], [-90, 90]);

  return (
    <section id="loja" className="py-36">
      <div className="container grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <RevealOnScroll type="fade-right">
          <div ref={visualRef} className="relative h-[440px] lg:h-[600px]">
            <div className="absolute left-0 top-0 z-[1] h-full w-[78%] overflow-hidden rounded-2xl border border-border shadow-[0_30px_70px_rgba(0,0,0,0.45)]">
              <motion.div style={{ y: yBig }} className="relative -inset-y-6 h-[calc(100%+3rem)] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1200&q=80"
                  alt="Fachada da loja física Bronx Multimarcas"
                  fill
                  sizes="60vw"
                  className="object-cover grayscale-[0.6] contrast-[1.1] brightness-[0.82]"
                />
              </motion.div>
            </div>
            <div className="absolute bottom-[-40px] right-0 z-[2] h-[56%] w-[52%] overflow-hidden rounded-2xl border border-border shadow-[0_30px_70px_rgba(0,0,0,0.45)]">
              <motion.div style={{ y: ySmall }} className="relative -inset-y-10 h-[calc(100%+5rem)] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80"
                  alt="Interior da loja com araras de roupas"
                  fill
                  sizes="30vw"
                  className="object-cover grayscale-[0.6] contrast-[1.1] brightness-[0.82]"
                />
              </motion.div>
            </div>
          </div>
        </RevealOnScroll>

        <div>
          <RevealOnScroll type="fade-up">
            <span className="eyebrow inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-neon before:h-1.5 before:w-1.5 before:rounded-full before:bg-neon">
              Experiência Física
            </span>
          </RevealOnScroll>
          <RevealOnScroll type="fade-up" delay={0.1}>
            <h2 className="font-display mt-4 max-w-[14ch] text-[clamp(2rem,4.4vw,3.4rem)] uppercase leading-none">
              Venha sentir o movimento de perto
            </h2>
          </RevealOnScroll>
          <RevealOnScroll type="fade-up" delay={0.2}>
            <p className="mb-9 mt-5 max-w-[46ch] text-[15px] leading-relaxed text-[#D8D8D8]">
              Mais do que uma loja, um ponto de encontro da cena streetwear carioca.
            </p>
          </RevealOnScroll>

          <RevealOnScroll type="fade-up" delay={0.25}>
            <div className="mb-8 grid grid-cols-1 gap-6 border-b border-border pb-8 sm:grid-cols-2">
              <div>
                <h4 className="mb-3 font-mono text-[11px] uppercase tracking-wide text-neon">Horário</h4>
                <ul className="space-y-1.5 text-[13px] text-[#D8D8D8]">
                  {SITE.hours.map((h) => (
                    <li key={h.label} className="flex justify-between gap-3">
                      <span>{h.label}</span>
                      <span className="font-medium text-white">{h.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-3 font-mono text-[11px] uppercase tracking-wide text-neon">Endereço</h4>
                <p className="text-[13px] leading-relaxed text-[#D8D8D8]">
                  {SITE.address.street}
                  <br />
                  {SITE.address.district} — {SITE.address.city}, {SITE.address.state}
                </p>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll type="fade-up" delay={0.3}>
            <MagneticButton className="mb-8">
              <a
                href={SITE.mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="link"
                className={cn(buttonVariants({ variant: "primary" }), "flex items-center gap-2.5")}
              >
                Como Chegar <ArrowRightIcon className="h-4 w-4" />
              </a>
            </MagneticButton>
          </RevealOnScroll>

          <RevealOnScroll type="zoom">
            <div className="h-56 overflow-hidden rounded-2xl border border-border">
              <iframe
                src={SITE.mapsEmbed}
                loading="lazy"
                title="Mapa da loja Bronx Multimarcas"
                className="h-full w-full grayscale invert-[92%] contrast-[84%] brightness-[96%]"
              />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
