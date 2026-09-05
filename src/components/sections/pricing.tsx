import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { pricingContent as content } from "@/data/content"
import { priceGroups } from "@/data/prices"

export function Pricing() {
  return (
    <section id="cenovnik" className="section-pad relative overflow-hidden bg-brand-pale/45">
      <div className="pointer-events-none absolute -right-24 top-14 h-64 w-64 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">{content.eyebrow}</span>
          <h2 className="section-title mt-4">
            {content.title}
            <br />
            <span className="text-brand-blue">{content.titleSecondLine}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-7 text-ink/60">{content.description}</p>
        </div>

        <div className="mt-12 columns-1 gap-6 lg:columns-2">
          {priceGroups.map((group) => (
            <article
              key={group.id}
              className="mb-6 break-inside-avoid rounded-3xl border border-ink/10 bg-white p-4 shadow-sm sm:p-6"
            >
              <div className="rounded-2xl bg-brand-blue px-5 py-3 text-white">
                <h3 className="font-display text-lg font-bold">{group.title}</h3>
                <p className="mt-0.5 text-xs text-white/75">{group.subtitle}</p>
              </div>
              <dl className="mt-3">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-end gap-2 border-b border-ink/5 px-1 py-3 text-sm last:border-b-0"
                  >
                    <dt className="flex min-w-0 flex-1 items-end gap-2 leading-5 text-ink/70">
                      <span className="max-w-[75%]">{item.name}</span>
                      <span className="mb-1 min-w-4 flex-1 border-b border-dotted border-ink/35" aria-hidden="true" />
                    </dt>
                    <dd className="whitespace-nowrap font-bold text-ink">{item.price}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="blue" size="lg">
            <a href="#kontakt">
              {content.action}
              <ArrowRight size={18} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
