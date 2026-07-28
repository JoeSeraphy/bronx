"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import MagneticButton from "@/components/shared/MagneticButton";
import { WhatsAppIcon, ArrowRightIcon } from "@/components/shared/Icons";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/data";

interface ParticleDef {
  left: string;
  size: number;
  duration: number;
  delay: number;
}

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const [particles, setParticles] = useState<ParticleDef[]>([]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { damping: 25, stiffness: 120 });
  const sy = useSpring(my, { damping: 25, stiffness: 120 });

  useEffect(() => {
    // gerado no client para não quebrar hidratação com valores aleatórios no SSR
    setParticles(
      Array.from({ length: 30 }).map(() => ({
        left: `${Math.random() * 100}%`,
        size: Math.random() * 3.5 + 1.5,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * -14,
      }))
    );
  }, []);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 animate-[gradientShift_18s_ease-in-out_infinite_alternate] bg-[length:220%_220%] bg-[radial-gradient(ellipse_60%_50%_at_20%_20%,rgba(203,255,61,0.16)_0%,transparent_60%),radial-gradient(ellipse_60%_50%_at_80%_80%,rgba(203,255,61,0.10)_0%,transparent_60%),linear-gradient(120deg,#050505_0%,#0d0f0a_35%,#050505_65%,#0a0d08_100%)]" />

      <div className="pointer-events-none absolute inset-0 z-[2]" aria-hidden>
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute -bottom-5 animate-[floatUp_linear_infinite] rounded-full bg-neon shadow-[0_0_8px_rgba(203,255,61,0.8)]"
            style={{ left: p.left, width: p.size, height: p.size, animationDuration: `${p.duration}s`, animationDelay: `${p.delay}s` }}
          />
        ))}
      </div>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute z-[2] h-[640px] w-[640px] rounded-full blur-[10px]"
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(203,255,61,0.16) 0%, rgba(203,255,61,0.05) 40%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1100px] px-6 text-center">
        <span className="eyebrow mb-6 inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.22em] text-neon before:h-px before:w-[22px] before:bg-neon after:h-px after:w-[22px] after:bg-neon">
          Bronx Multimarcas
        </span>
        <h2 className="font-display animate-[titleGlow_4s_ease-in-out_infinite] text-[clamp(2.4rem,7.2vw,6.6rem)] uppercase leading-[1.02]">
          Seu Próximo Look
          <br />
          Começa Aqui.
        </h2>
        <p className="mx-auto my-11 max-w-[44ch] text-[clamp(14px,1.6vw,17px)] leading-relaxed text-grey">
          Peças limitadas, estoque real, sem enrolação. O drop da semana não espera.
        </p>

        <div className="flex flex-wrap justify-center gap-5">
          <MagneticButton>
            <a
              href="#novidades"
              data-cursor="link"
              className={cn(buttonVariants({ variant: "giant" }), "animate-[pulseGlow_2.6s_ease-in-out_infinite] flex items-center gap-3 px-12 py-6 text-lg")}
            >
              Comprar Agora <ArrowRightIcon className="h-[22px] w-[22px]" />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="link"
              className={cn(buttonVariants({ variant: "whatsapp" }), "flex items-center gap-3 px-9 py-5")}
            >
              <WhatsAppIcon className="h-5 w-5" /> Chamar no WhatsApp
            </a>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
