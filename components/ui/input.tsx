import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      className={cn(
        "w-full rounded-full border border-border bg-white/[0.04] px-5 py-3 text-sm text-white outline-none placeholder:text-neutral-500 focus-visible:border-neon",
        className
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";
