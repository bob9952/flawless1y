import { ArrowRight, Phone } from "lucide-react"
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
      <div className="relative mx-auto grid min-h-[calc(100svh-76px)] max-w-7xl items-start px-5 pb-8 pt-10 sm:min-h-[820px] sm:pb-40 sm:pt-16 lg:min-h-[720px] lg:grid-cols-2 lg:items-center lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <h1 className="font-display text-[2.8rem] font-extrabold leading-[.95] tracking-[-.06em] text-ink min-[375px]:text-5xl sm:text-6xl lg:text-[clamp(4rem,6.5vw,6rem)]">
            {content.title}
            <br />
            {content.titlePrefix}{" "}
            <span className="relative text-brand-blue sm:whitespace-nowrap">
              {content.highlightedTitle}
              <span className="headline-stroke" />
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-ink/65 sm:mt-7 sm:text-lg sm:leading-8">
            {content.description}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <Button asChild size="lg" variant="blue" className="h-12 sm:h-14">
              <a href={`tel:${contact.phoneHref}`}>
                <Phone size={19} fill="currentColor" />
                {content.primaryAction}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 sm:h-14">
              <a href="#cenovnik">
                {content.secondaryAction}
                <ArrowRight size={18} />
              </a>
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-ink/70 sm:mt-10 sm:gap-3 sm:text-sm">
            {content.categories.map((item) => (
              <span key={item} className="rounded-full border border-brand-navy/10 bg-white/70 px-3 py-2 sm:px-4">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
