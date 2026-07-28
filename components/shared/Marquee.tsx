"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  reverse?: boolean;
  /** pausa no hover E no foco de teclado (Tab) — acessibilidade WCAG 2.2.2 */
  pausable?: boolean;
}

/**
 * Marquee infinito via CSS puro (mais leve que animar com JS a cada frame).
 * O conteúdo é duplicado e a trilha translada -50% em loop contínuo.
 */
export default function Marquee({
  children,
  duration = 30,
  className,
  reverse = false,
  pausable = true,
}: MarqueeProps) {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={() => pausable && setPaused(true)}
      onMouseLeave={() => pausable && setPaused(false)}
      onFocus={() => pausable && setPaused(true)}
      onBlur={() => pausable && setPaused(false)}
    >
      <div
        className={cn("flex w-max", reverse ? "animate-marquee-reverse" : "animate-marquee")}
        style={{
          animationDuration: `${duration}s`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
