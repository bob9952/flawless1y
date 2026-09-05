import * as React from "react"

import { assetUrl } from "@/lib/assets"
import { cn } from "@/lib/utils"

type LogoProps = Omit<React.ComponentPropsWithoutRef<"a">, "href">

export const Logo = React.forwardRef<HTMLAnchorElement, LogoProps>(({ className, ...props }, ref) => (
  <a
    ref={ref}
    href="#pocetna"
    className={cn(
      "flex items-center gap-2.5 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2",
      className,
    )}
    aria-label="Flawless1y početna"
    data-slot="logo"
    {...props}
  >
    <span className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full border border-brand-blue/20 bg-white shadow-md shadow-ink/10">
      <span className="relative h-[27px] w-[42px] overflow-hidden" aria-hidden="true">
        <img
          src={assetUrl("images/flawless-logo.jpg")}
          alt=""
          className="absolute -left-[12px] -top-[15px] w-[68px] max-w-none mix-blend-multiply"
        />
      </span>
    </span>
    <span className="font-display text-xl font-extrabold tracking-[-.04em] text-ink">
      flawless<span className="text-brand-blue">1y</span>
    </span>
  </a>
))
Logo.displayName = "Logo"
