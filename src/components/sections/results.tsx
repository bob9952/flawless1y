import { useState } from "react"
import { Check } from "lucide-react"
import { resultsContent as content } from "@/data/content"
import { assetUrl } from "@/lib/assets"

export function Results() {
  const [position, setPosition] = useState(56)
  return (
    <section id="rezultati" className="section-pad overflow-hidden bg-[#f4f8fd]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.76fr_1.24fr] lg:items-center lg:gap-20 lg:px-8">
        <div>
          <span className="eyebrow">{content.eyebrow}</span>
          <h2 className="section-title mt-4">
            {content.title}
            <br />
            {content.titleSecondLine}
          </h2>
          <p className="mt-6 max-w-md leading-7 text-ink/60">{content.description}</p>
          <ul className="mt-8 space-y-4">
            {content.points.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-semibold text-ink/80">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-blue text-ink">
                  <Check size={14} strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-2xl overflow-hidden rounded-[2rem] border border-brand-navy/10 bg-white shadow-soft sm:aspect-[4/3]">
          <img
            src={assetUrl(content.image)}
            alt="Površina pre dubinskog čišćenja"
            className="absolute inset-0 h-full w-full object-cover object-[68%_center] sepia-[.35] brightness-[.72] saturate-[.65]"
          />
          <img
            src={assetUrl(content.image)}
            alt="Površina posle dubinskog čišćenja"
            className="absolute inset-0 h-full w-full object-cover object-[68%_center]"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-xl"
            style={{ left: `${position}%` }}
          >
            <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-white bg-brand-blue text-ink shadow-xl">
              ↔
            </span>
          </div>
          <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-ink">
            POSLE
          </span>
          <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-ink/80 px-3 py-1.5 text-xs font-bold text-white">
            PRE
          </span>
          <input
            aria-label="Uporedi pre i posle"
            type="range"
            min="8"
            max="92"
            value={position}
            onChange={(event) => setPosition(Number(event.target.value))}
            className="comparison-range absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          />
        </div>
      </div>
    </section>
  )
}
