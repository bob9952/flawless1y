import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { servicesContent as content } from "@/data/content"
import { services } from "@/data/services"

export function Services() {
  return (
    <section id="usluge" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">{content.eyebrow}</span>
            <h2 className="section-title mt-4">
              {content.title}
              <br />
              {content.titleSecondLine}
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-ink/55">{content.description}</p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, description, price, icon: Icon, accent }) => (
            <Card key={title} className="service-card group border-ink/[.08]">
              <CardHeader>
                <div
                  className={`grid h-14 w-14 place-items-center rounded-2xl ${accent} text-ink transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105`}
                >
                  <Icon size={27} strokeWidth={1.8} />
                </div>
                <h3 className="mt-7 font-display text-xl font-bold tracking-tight text-ink">{title}</h3>
              </CardHeader>
              <CardContent>
                <p className="min-h-[72px] text-sm leading-6 text-ink/55">{description}</p>
                <div className="mt-6 flex items-center justify-between border-t border-ink/[.08] pt-5">
                  <span className="font-display text-sm font-bold text-ink">{price}</span>
                  <a
                    href="#cenovnik"
                    aria-label={`Cenovnik: ${title}`}
                    className="grid h-9 w-9 place-items-center rounded-full bg-brand-pale text-ink transition group-hover:bg-brand-blue"
                  >
                    <ArrowRight size={16} />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
