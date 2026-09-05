import { assetUrl } from "@/lib/assets"

export function Logo() {
  return (
    <a href="#pocetna" className="flex items-center gap-2.5" aria-label="Flawless1y početna">
      <span className="logo-crop relative h-11 w-11 overflow-hidden rounded-[14px] bg-white shadow-md shadow-ink/10">
        <img src={assetUrl("images/flawless-logo.jpg")} alt="" className="absolute max-w-none mix-blend-multiply" />
      </span>
      <span className="font-display text-xl font-extrabold tracking-[-.04em] text-ink">
        flawless<span className="text-brand-blue">1y</span>
      </span>
    </a>
  )
}
