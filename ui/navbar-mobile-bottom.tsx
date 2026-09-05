import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

const NavbarMobileBottom = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <nav
    ref={ref}
    className={cn(
      "fixed inset-x-0 bottom-0 z-50 flex min-h-16 border-t border-portal-border-soft bg-portal-surface/95 px-1 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_24px_rgba(40,28,20,0.08)] backdrop-blur md:hidden",
      className,
    )}
    {...props}
  />
))
NavbarMobileBottom.displayName = "NavbarMobileBottom"

interface NavbarMobileBottomItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
  asChild?: boolean
}

const NavbarMobileBottomItem = React.forwardRef<
  HTMLButtonElement,
  NavbarMobileBottomItemProps
>(
  (
    {
      active = false,
      asChild = false,
      className,
      disabled = false,
      ...props
    },
    ref,
  ) => {
    const Comp: React.ElementType = asChild ? Slot : "button"

    return (
      <Comp
        ref={ref}
        aria-disabled={disabled || undefined}
        data-active={active ? "true" : undefined}
        data-disabled={disabled ? "true" : undefined}
        className={cn(
          "flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-md px-1 py-2 text-[11px] font-semibold leading-tight text-portal-text-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portal-accent focus-visible:ring-offset-2 focus-visible:ring-offset-portal-surface data-[active=true]:text-portal-accent data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-45",
          className,
        )}
        disabled={asChild ? undefined : disabled}
        type={asChild ? undefined : props.type ?? "button"}
        {...props}
      />
    )
  },
)
NavbarMobileBottomItem.displayName = "NavbarMobileBottomItem"

export { NavbarMobileBottom, NavbarMobileBottomItem }
