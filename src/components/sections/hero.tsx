import { ArrowRight, Check, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { contact } from "@/data/contact"
import { heroContent as content } from "@/data/content"
import { assetUrl } from "@/lib/assets"

export function Hero() {
  return (
    <section id="pocetna" className="relative overflow-hidden bg-[#f4f8fd] pt-[76px]">
      <div className="absolute inset-0 lg:hidden">
        <img src={assetUrl(content.image)} alt="" className="h-full w-full object-cover object-[70%_center]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(244,248,253,1)_0%,rgba(244,248,253,.98)_42%,rgba(244,248,253,.88)_62%,rgba(244,248,253,.38)_82%,rgba(244,248,253,.12)_100%)]" />
      </div>
      <div className="absolute inset-y-0 right-0 hidden w-[56%] lg:block">
        <img src={assetUrl(content.image)} alt={content.imageAlt} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f4f8fd] via-[#f4f8fd]/30 to-transparent" />
      </div>
      <div className="hero-grid absolute inset-0 opacity-40" />
      <div className="relative mx-auto grid min-h-[860px] max-w-7xl items-start px-5 pb-56 pt-16 sm:min-h-[900px] sm:pb-64 sm:pt-20 lg:min-h-[720px] lg:grid-cols-2 lg:items-center lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-brand-blue/35 bg-white/85 px-4 py-2 text-xs font-bold uppercase tracking-[.12em] text-ink shadow-sm backdrop-blur">
            <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-blue">
              <Check size={12} strokeWidth={3} />
            </span>
            {content.badge}
          </div>
          <h1 className="font-display text-[clamp(3.2rem,6.5vw,6rem)] font-extrabold leading-[.97] tracking-[-.065em] text-ink">
            {content.title}
            <br />
            {content.titlePrefix}{" "}
            <span className="relative text-brand-blue sm:whitespace-nowrap">
              {content.highlightedTitle}
              <span className="headline-stroke" />
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-ink/65">{content.description}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="blue">
              <a href={`tel:${contact.phoneHref}`}>
                <Phone size={19} fill="currentColor" />
                {content.primaryAction}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#cenovnik">
                {content.secondaryAction}
                <ArrowRight size={18} />
              </a>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-3 text-sm font-semibold text-ink/70">
            {content.categories.map((item) => (
              <span key={item} className="rounded-full border border-brand-navy/10 bg-white/70 px-4 py-2">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
