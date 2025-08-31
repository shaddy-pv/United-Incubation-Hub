import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow-blue hover:shadow-glow-blue hover:scale-105",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-primary/30 bg-background/10 backdrop-blur-sm text-foreground hover:bg-primary/10 hover:text-primary hover:border-primary hover:shadow-glow-blue",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-glow-purple hover:shadow-glow-purple hover:scale-105",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-gradient-neon text-white font-orbitron font-bold text-lg px-8 py-4 rounded-lg shadow-glow-blue hover:shadow-glow-blue hover:scale-105 hover:bg-gradient-holographic transition-all duration-300",
        neon: "bg-transparent border-2 border-primary text-primary font-orbitron font-bold hover:bg-primary hover:text-primary-foreground shadow-glow-blue hover:shadow-glow-blue hover:scale-105",
        holographic: "bg-gradient-holographic text-white font-orbitron font-bold border border-accent/30 shadow-glow-pink hover:shadow-glow-pink hover:scale-105"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
