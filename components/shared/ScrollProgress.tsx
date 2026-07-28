"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Barra fina fixa no topo, mostrando o progresso de rolagem da página inteira. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 });

  return (
    <motion.div
      role="progressbar"
      aria-label="Progresso de rolagem da página"
      className="fixed left-0 top-0 z-[8000] h-[3px] w-full origin-left bg-neon shadow-[0_0_10px_rgba(203,255,61,0.6)]"
      style={{ scaleX }}
    />
  );
}
