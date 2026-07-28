"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

export default function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // seção fica "grudada" na tela por 60% de viewport extra de scroll —
      // dá o momento de pausa/leitura típico de scroll storytelling
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=60%",
        pin: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative flex min-h-screen items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden>
        <span className="font-display whitespace-nowrap text-[clamp(6rem,20vw,18rem)] text-transparent [-webkit-text-stroke:1px_rgba(234,234,234,0.12)]">
          MOVIMENTO — MOVIMENTO —
        </span>
      </div>

      <div className="container relative z-10 mx-auto max-w-[900px] text-center">
        <RevealOnScroll type="fade-up">
          <span className="eyebrow inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-neon before:h-1.5 before:w-1.5 before:rounded-full before:bg-neon">
            Manifesto
          </span>
        </RevealOnScroll>
        <RevealOnScroll type="blur" delay={0.1}>
          <h2 className="font-display mt-6 text-[clamp(2rem,5vw,4rem)] uppercase leading-[1.08]">
            Não vendemos roupa.
            <br />
            Vendemos <em className="not-italic text-neon">pertencimento</em>.
          </h2>
        </RevealOnScroll>
        <RevealOnScroll type="fade-up" delay={0.2}>
          <p className="mx-auto mt-6 max-w-[56ch] text-base leading-relaxed text-[#D8D8D8]">
            Bronx nasceu da quebrada e virou referência — ponto de encontro entre grifes internacionais e a cena
            local. Cada drop é editado a dedo, sem fórmula, sem óbvio.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
