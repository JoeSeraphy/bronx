"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import MagneticButton from "@/components/shared/MagneticButton";
import { WhatsAppIcon, ArrowRightIcon } from "@/components/shared/Icons";
import { SITE } from "@/lib/data";

const TITLE_LINE_1 = "NÃO VENDEMOS ROUPAS.";
const TITLE_LINE_2 = "VENDEMOS IDENTIDADE.";

function splitLetters(text: string) {
  return text.split("").map((char, i) => (
    <motion.span
      key={i}
      className="inline-block"
      variants={{
        hidden: { opacity: 0, y: "60%", rotate: 4 },
        show: { opacity: 1, y: "0%", rotate: 0 },
      }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ));
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!heroRef.current || !videoWrapRef.current) return;

    // Parallax: o vídeo de fundo se move mais devagar que o scroll (scroll storytelling)
    const ctx = gsap.context(() => {
      gsap.to(videoWrapRef.current, {
        y: 200,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative flex h-[100svh] items-center justify-center overflow-hidden">
      <div ref={videoWrapRef} className="absolute inset-0 will-change-transform">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=60"
          aria-label="Vídeo institucional mostrando modelos com roupas streetwear Bronx"
          className="absolute left-1/2 top-1/2 h-full min-h-full w-full min-w-full -translate-x-1/2 -translate-y-1/2 
          object-cover [animation:slowzoom_24s_ease-in-out_infinite_alternate] grayscale-[0.55] contrast-[1.15] brightness-[0.85]"
        >
          <source src="https://assets.mixkit.co/videos/809/809-720.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,5,5,0)_35%,rgba(5,5,5,0.65)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black to-transparent" />

      <motion.div
        className="relative z-10 mx-auto max-w-[1100px] px-6 text-center"
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03, delayChildren: 0.2 } } }}
      >
        <motion.span
          variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.22em] text-neon before:h-1.5 before:w-1.5 before:rounded-full before:bg-neon before:shadow-[0_0_12px_theme(colors.neon)]"
        >
          Bronx Multimarcas
        </motion.span>

        <h1 className="font-display my-6 text-[clamp(2.2rem,7vw,6.4rem)] uppercase leading-[1.02] tracking-tight">
          <span className="block overflow-hidden py-1">
            <motion.span className="inline-block" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.028 } } }}>
              {splitLetters(TITLE_LINE_1)}
            </motion.span>
          </span>
          <span className="block overflow-hidden py-1 text-neon">
            <motion.span className="inline-block" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.028, delayChildren: 0.3 } } }}>
              {splitLetters(TITLE_LINE_2)}
            </motion.span>
          </span>
        </h1>

        <motion.p
          variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.9, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-11 max-w-[46ch] text-[clamp(15px,1.6vw,19px)] leading-relaxed text-grey"
        >
          As melhores marcas nacionais e importadas em um só lugar.
        </motion.p>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.9, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-4"
        >
          <MagneticButton>
            <a
              href="#novidades"
              data-cursor="link"
              className={cn(buttonVariants({ variant: "primary", size: "lg" }), "flex items-center gap-2.5")}
            >
              Ver Coleção <ArrowRightIcon className="h-[18px] w-[18px]" />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="link"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-md transition-colors hover:border-neon hover:text-neon"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" /> Falar no WhatsApp
            </a>
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2.5"
      >
        <div className="relative h-9 w-6 rounded-full border-[1.5px] border-white/50">
          <motion.span
            className="absolute left-1/2 top-2 h-1 w-1 -translate-x-1/2 rounded-full bg-neon shadow-[0_0_8px_theme(colors.neon)]"
            animate={{ top: ["7px", "22px"], opacity: [1, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-grey">Role para explorar</span>
      </motion.div>
    </section>
  );
}
