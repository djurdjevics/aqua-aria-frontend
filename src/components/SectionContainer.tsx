import type { PropsWithChildren } from "react";
import { cn } from "../utils/cn";

export function SectionContainer({ children, className }: PropsWithChildren & { className?: string }) {
  return <section className={cn("max-w-7xl mx-auto px-4", className)}>{children}</section>;
}
