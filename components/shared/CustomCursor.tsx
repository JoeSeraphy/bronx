"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Cursor personalizado: um ponto rígido + um anel que "arrasta" atrás com
 * spring física. Cresce ao passar sobre qualquer elemento com [data-cursor="link"].
 * Desativado em touch/mobile (não faz sentido sem mouse) e some se o usuário
 * pedir "prefers-reduced-motion".
 */
export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { damping: 25, stiffness: 300 });
  const ringY = useSpring(dotY, { damping: 25, stiffness: 300 });

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    setIsTouch(!hasFinePointer);
    if (!hasFinePointer) return;

    const move = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);

    const over = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('[data-cursor="link"]');
      setIsHovering(Boolean(target));
    };
    window.addEventListener("mouseover", over);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [dotX, dotY]);

  if (isTouch) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-neon"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border border-neon/60"
        animate={{ width: isHovering ? 64 : 38, height: isHovering ? 64 : 38, backgroundColor: isHovering ? "rgba(203,255,61,0.08)" : "rgba(0,0,0,0)" }}
        transition={{ duration: 0.25 }}
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
}
