"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-bold uppercase tracking-wide transition-transform duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-neon focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-white text-black hover:bg-neon",
        whatsapp:
          "border border-white/20 bg-white/5 text-white backdrop-blur-md hover:border-neon hover:text-neon",
        giant: "bg-neon text-black shadow-[0_20px_50px_rgba(203,255,61,0.25)]",
        ghost: "border border-border bg-white/5 text-white hover:border-neon hover:text-neon",
      },
      size: {
        default: "px-8 py-4 text-sm",
        lg: "px-12 py-6 text-base",
        icon: "h-12 w-12 rounded-full p-0",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

/** Botão base do design system — variantes tipadas + ripple effect no clique. */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, onClick, children, ...props }, ref) => {
    const [ripples, setRipples] = React.useState<Ripple[]>([]);

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
      const rect = e.currentTarget.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 1.2;
      const id = Date.now();
      setRipples((prev) => [
        ...prev,
        { id, x: e.clientX - rect.left - size / 2, y: e.clientY - rect.top - size / 2, size },
      ]);
      setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 650);
      onClick?.(e);
    }

    return (
      <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} onClick={handleClick} {...props}>
        {children}
        {ripples.map((r) => (
          <span
            key={r.id}
            className="pointer-events-none absolute animate-[ripple_0.6s_ease-out_forwards] rounded-full bg-black/30"
            style={{ left: r.x, top: r.y, width: r.size, height: r.size }}
          />
        ))}
      </button>
    );
  }
);
Button.displayName = "Button";
