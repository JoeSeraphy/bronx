"use client";

import { motion, Variants } from "framer-motion";

type RevealType = "fade-up" | "fade-left" | "fade-right" | "zoom" | "scale" | "blur";

const variantsMap: Record<RevealType, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  },
  "fade-left": {
    hidden: { opacity: 0, x: -60 },
    show: { opacity: 1, x: 0 },
  },
  "fade-right": {
    hidden: { opacity: 0, x: 60 },
    show: { opacity: 1, x: 0 },
  },
  zoom: {
    hidden: { opacity: 0, scale: 0.85 },
    show: { opacity: 1, scale: 1 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.7 },
    show: { opacity: 1, scale: 1 },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(14px)", y: 30 },
    show: { opacity: 1, filter: "blur(0px)", y: 0 },
  },
};

interface RevealOnScrollProps {
  children: React.ReactNode;
  type?: RevealType;
  delay?: number;
  className?: string;
  /** quando usado dentro de um container com `stagger`, define o índice do item */
  once?: boolean;
}

/** Componente reutilizável de reveal ao scroll — evita repetir a mesma lógica do Framer Motion em toda seção. */
export default function RevealOnScroll({
  children,
  type = "fade-up",
  delay = 0,
  className,
  once = true,
}: RevealOnScrollProps) {
  return (
    <motion.div
      className={className}
      variants={variantsMap[type]}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Container que aplica stagger nos filhos diretos (usar com <StaggerItem> dentro). */
export function StaggerGroup({
  children,
  className,
  staggerDelay = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}
