import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "article" | "section";
};

export default function GlassCard({ as = "div", className, children, ...props }: GlassCardProps) {
  const Component = as;

  return (
    <Component
      className={cn(
        "glass-panel relative overflow-hidden rounded-lg transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_22px_60px_rgba(15,23,42,.10)]",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
