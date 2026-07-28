"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "@/components/shared/MagneticButton";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { products, type Product } from "@/lib/data";

const sizeClasses: Record<Product["size"], string> = {
  a: "w-[300px] md:w-[340px] aspect-[3/4.3]",
  b: "w-[380px] md:w-[520px] aspect-[4/3.1]",
  c: "w-[340px] md:w-[400px] aspect-[4/5]",
};

export default function Novidades() {
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!pinRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current!;
      const distance = () => track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: () => "+=" + distance(),
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, pinRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div id="novidades" className="container pt-32">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-5">
          <div>
            <RevealOnScroll type="fade-up">
              <span className="eyebrow inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-neon before:h-1.5 before:w-1.5 before:rounded-full before:bg-neon">
                Drop Semanal
              </span>
            </RevealOnScroll>
            <RevealOnScroll type="fade-up" delay={0.1}>
              <h2 className="font-display mt-3 text-[clamp(2.2rem,5vw,4.4rem)] uppercase leading-none">
                Novidades da Semana
              </h2>
            </RevealOnScroll>
          </div>
          <RevealOnScroll type="fade-left">
            <p className="text-sm text-[#D8D8D8]">Role para baixo — o carrossel se move sozinho.</p>
          </RevealOnScroll>
        </div>
      </div>

      <div ref={pinRef} className="relative mt-16 h-screen overflow-hidden">
        <div ref={trackRef} className="flex h-full items-center gap-6 px-6 will-change-transform md:px-12">
          {products.map((p) => (
            <div key={p.code} className={`group relative flex-none overflow-hidden rounded-2xl border border-border bg-charcoal ${sizeClasses[p.size]}`}>
              <div className="absolute inset-0">
                <Image
                  src={p.imgA}
                  alt={p.name}
                  fill
                  sizes="500px"
                  className="object-cover opacity-100 grayscale-[0.7] contrast-[1.1] brightness-[0.8] transition-all duration-500 group-hover:rotate-[-2.5deg] group-hover:scale-110 group-hover:opacity-0 group-hover:grayscale-[0.2] group-hover:brightness-[0.72]"
                />
                <Image
                  src={p.imgB}
                  alt={`${p.name} outro ângulo`}
                  fill
                  sizes="500px"
                  className="object-cover opacity-0 grayscale-[0.2] contrast-[1.1] brightness-[0.72] transition-all duration-500 group-hover:rotate-[-2.5deg] group-hover:scale-110 group-hover:opacity-100"
                />
                <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/95 via-transparent to-transparent" />
              </div>

              <div className="absolute inset-x-5 bottom-5 z-10 flex items-end justify-between gap-3">
                <div>
                  <h3 className="font-display text-[clamp(1.1rem,1.8vw,1.4rem)] uppercase">{p.name}</h3>
                  <span className="font-mono text-[13px] text-grey">{p.price}</span>
                </div>
                <MagneticButton>
                  <a
                    href="#"
                    data-cursor="link"
                    aria-label={`Comprar ${p.name}`}
                    className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white text-black transition-colors group-hover:bg-neon"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
                      <circle cx="9" cy="21" r="1" />
                      <circle cx="20" cy="21" r="1" />
                      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
                    </svg>
                  </a>
                </MagneticButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
