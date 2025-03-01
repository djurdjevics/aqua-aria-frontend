import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../utils/cn";

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-full text-base font-semibold uppercase transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-bg hover:bg-primary/90",
        secondary: "bg-white border border-2 border-secondary text-secondary hover:bg-secondary hover:text-bg",
        outline: "bg-transparent border border-primary text-primary hover:bg-primary hover:text-bg",
      },
      size: {
        default: "px-16 py-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => {
  return <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});

Button.displayName = "Button";

export { Button, buttonVariants };
